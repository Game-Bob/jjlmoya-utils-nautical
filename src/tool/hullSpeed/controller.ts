import { sceneSvg, setText } from './dom-views';
import { bandCopy, formatNumber, kindNote } from './evaluator';
import {
  clampLwlMetres,
  computeHullSpeed,
  displayLength,
  LWL_MAX_M,
  LWL_MIN_M,
  storeLength,
} from './logic';
import type { HullKind, HullSpeedResult, UnitSystem } from './logic';
import { BOAT_PRESETS, presetIdForLwl } from './presets';
import { loadState, saveState } from './storage';
import type { HullSpeedState } from './storage';
import type { HullSpeedUI } from './ui';

interface MountData {
  ui: HullSpeedUI;
}

function el<T extends HTMLElement>(root: HTMLElement, sel: string): T | null {
  return root.querySelector(sel);
}

function bindDrag(root: HTMLElement, ui: HullSpeedUI, state: HullSpeedState): void {
  const scene = el(root, '[data-scene]');
  if (!scene) return;
  const grab = { x: 0, lwl: state.lwlMetres };
  scene.addEventListener('pointerdown', (ev) => {
    scene.setPointerCapture(ev.pointerId);
    grab.x = ev.clientX;
    grab.lwl = state.lwlMetres;
  });
  scene.addEventListener('pointermove', (ev) => {
    if (!scene.hasPointerCapture(ev.pointerId)) return;
    const width = Math.max(scene.getBoundingClientRect().width, 1);
    const delta = ((ev.clientX - grab.x) / width) * (LWL_MAX_M - LWL_MIN_M);
    state.lwlMetres = clampLwlMetres(grab.lwl + delta);
    saveState(state);
    paint(root, ui, state);
  });
}

function secondarySpeed(result: HullSpeedResult, unit: UnitSystem): string {
  if (unit === 'imperial') return `${formatNumber(result.hullSpeedMph, 1)} mph`;
  return `${formatNumber(result.hullSpeedKmh, 1)} km/h`;
}

function markPressed(root: HTMLElement, sel: string, value: string): void {
  root.querySelectorAll<HTMLElement>(sel).forEach((node) => {
    const on = node.getAttribute(sel.includes('kind') ? 'data-kind' : 'data-boat') === value;
    node.classList.toggle('is-on', on);
    node.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
}

function fillSelect(root: HTMLElement, result: HullSpeedResult): void {
  markPressed(root, '[data-kind]', result.hullKind);
  markPressed(root, '[data-boat]', presetIdForLwl(result.lwlMetres) ?? '');
}

function paintFleet(root: HTMLElement, ui: HullSpeedUI, unit: UnitSystem): void {
  const suffix = unit === 'imperial' ? ui.lwlUnitFt : ui.lwlUnitM;
  BOAT_PRESETS.forEach((preset) => {
    const node = el(root, `[data-boat="${preset.id}"] [data-len]`);
    const shown = displayLength(preset.lwlMetres, unit);
    setText(node, `${formatNumber(shown, 1)} ${suffix}`);
  });
}

function paint(root: HTMLElement, ui: HullSpeedUI, state: HullSpeedState): void {
  const result = computeHullSpeed(state);
  root.dataset.band = result.band;
  const scene = el(root, '[data-scene]');
  if (scene) scene.innerHTML = sceneSvg({ result, unit: state.unit });
  setText(el(root, '[data-kn]'), formatNumber(result.hullSpeedKnots, 1));
  setText(el(root, '[data-sec]'), secondarySpeed(result, state.unit));
  setText(el(root, '[data-ratio]'), formatNumber(result.speedLengthRatio, 2));
  setText(el(root, '[data-froude]'), formatNumber(result.froudeNumber, 3));
  setText(el(root, '[data-band]'), bandCopy(ui, result.band, state.hullKind));
  setText(el(root, '[data-note]'), kindNote(ui, state.hullKind));
  paintLength(root, ui, state, result);
  paintLog(root, state);
  fillSelect(root, result);
  paintFleet(root, ui, state.unit);
}

function paintLength(
  root: HTMLElement,
  ui: HullSpeedUI,
  state: HullSpeedState,
  result: HullSpeedResult,
): void {
  const unit = state.unit;
  const length = displayLength(result.lwlMetres, unit);
  setText(el(root, '[data-lwl-label]'), unit === 'imperial' ? ui.lwlLabelImperial : ui.lwlLabelMetric);
  setText(el(root, '[data-lwl-unit]'), unit === 'imperial' ? ui.lwlUnitFt : ui.lwlUnitM);
  const digits = unit === 'imperial' ? 1 : 2;
  const min = displayLength(LWL_MIN_M, unit);
  const max = displayLength(LWL_MAX_M, unit);
  syncNumber({ input: el<HTMLInputElement>(root, '[data-lwl]'), value: length, min, max, digits });
  syncNumber({ input: el<HTMLInputElement>(root, '[data-lwl-rail]'), value: length, min, max, digits });
  root.querySelectorAll<HTMLElement>('[data-unit]').forEach((node) => {
    const on = node.getAttribute('data-unit') === unit;
    node.classList.toggle('is-on', on);
    node.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
}

function paintLog(root: HTMLElement, state: HullSpeedState): void {
  syncNumber({
    input: el<HTMLInputElement>(root, '[data-obs]'),
    value: state.observedKnots,
    min: 0,
    max: 40,
    digits: 1,
  });
  syncNumber({
    input: el<HTMLInputElement>(root, '[data-obs-rail]'),
    value: state.observedKnots,
    min: 0,
    max: 40,
    digits: 1,
  });
}

interface SyncNumber {
  input: HTMLInputElement | null;
  value: number;
  min: number;
  max: number;
  digits: number;
}

function syncNumber(opts: SyncNumber): void {
  if (!opts.input) return;
  opts.input.min = String(opts.min);
  opts.input.max = String(opts.max);
  opts.input.value = formatNumber(opts.value, opts.digits);
}

function bindUnits(root: HTMLElement, ui: HullSpeedUI, state: HullSpeedState): void {
  root.querySelectorAll<HTMLElement>('[data-unit]').forEach((node) => {
    node.addEventListener('click', () => {
      const next = node.getAttribute('data-unit');
      state.unit = next === 'imperial' ? 'imperial' : 'metric';
      saveState(state);
      paint(root, ui, state);
    });
  });
}

function bindLength(root: HTMLElement, ui: HullSpeedUI, state: HullSpeedState): void {
  const lwl = el<HTMLInputElement>(root, '[data-lwl]');
  const rail = el<HTMLInputElement>(root, '[data-lwl-rail]');
  const apply = (raw: string) => {
    state.lwlMetres = storeLength(Number(raw), state.unit);
    saveState(state);
    paint(root, ui, state);
  };
  lwl?.addEventListener('input', () => apply(lwl.value));
  rail?.addEventListener('input', () => apply(rail.value));
}

function bindLog(root: HTMLElement, ui: HullSpeedUI, state: HullSpeedState): void {
  const obs = el<HTMLInputElement>(root, '[data-obs]');
  const rail = el<HTMLInputElement>(root, '[data-obs-rail]');
  const apply = (raw: string) => {
    state.observedKnots = Number(raw);
    saveState(state);
    paint(root, ui, state);
  };
  obs?.addEventListener('input', () => apply(obs.value));
  rail?.addEventListener('input', () => apply(rail.value));
}

function bindKinds(root: HTMLElement, ui: HullSpeedUI, state: HullSpeedState): void {
  root.querySelectorAll<HTMLElement>('[data-kind]').forEach((node) => {
    node.addEventListener('click', () => {
      state.hullKind = node.getAttribute('data-kind') as HullKind;
      saveState(state);
      paint(root, ui, state);
    });
  });
  root.querySelectorAll<HTMLElement>('[data-boat]').forEach((node) => {
    node.addEventListener('click', () => {
      const preset = BOAT_PRESETS.find((item) => item.id === node.getAttribute('data-boat'));
      if (!preset) return;
      state.lwlMetres = preset.lwlMetres;
      saveState(state);
      paint(root, ui, state);
    });
  });
}

export function mountHullSpeed(root: HTMLElement, data: MountData): void {
  const state = loadState();
  bindUnits(root, data.ui, state);
  bindLength(root, data.ui, state);
  bindLog(root, data.ui, state);
  bindDrag(root, data.ui, state);
  bindKinds(root, data.ui, state);
  paint(root, data.ui, state);
}
