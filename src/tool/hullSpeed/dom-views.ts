import { formatNumber } from './evaluator';
import { boatMarkup } from './hull-draw';
import type { HullSpeedResult, UnitSystem } from './logic';
import { displayLength, LWL_MAX_M, LWL_MIN_M } from './logic';

interface Span {
  stern: number;
  bow: number;
  wl: number;
  width: number;
  height: number;
}

function hullSpan(lwlMetres: number): Span {
  const t = (lwlMetres - LWL_MIN_M) / (LWL_MAX_M - LWL_MIN_M);
  const hull = 430 + t * 130;
  const padX = 96 + t * 200;
  const width = hull + padX * 2;
  const height = 460;
  return { stern: padX, bow: padX + hull, wl: 268, width, height };
}

function hullLift(result: HullSpeedResult): number {
  if (result.hullKind === 'planing' && result.band === 'above') return 16;
  if (result.band === 'above') return -10;
  if (result.band === 'at') return -5;
  return 0;
}

function waveAmpPx(result: HullSpeedResult): number {
  if (result.band === 'below') return 8;
  if (result.band === 'near') return 16;
  if (result.band === 'at') return 28;
  if (result.hullKind === 'planing') return 10;
  return 36;
}

function compareKnots(result: HullSpeedResult): number {
  if (result.observedKnots > 0) return result.observedKnots;
  return result.hullSpeedKnots;
}

function waveLengthPx(span: Span, result: HullSpeedResult): number {
  const hs = result.hullSpeedKnots;
  const speed = compareKnots(result);
  const hull = span.bow - span.stern;
  if (hs <= 0) return hull;
  return Math.max(hull * 0.35, hull * ((speed * speed) / (hs * hs)));
}

function waveEnv(x: number, span: Span): number {
  const mid = (span.stern + span.bow) / 2;
  const reach = (span.bow - span.stern) * 0.72;
  const d = Math.abs(x - mid) / reach;
  if (d <= 1) return 1;
  return Math.max(0, 1.4 - d * 0.75);
}

function waveY(x: number, span: Span, result: HullSpeedResult): number {
  const lambda = waveLengthPx(span, result);
  const amp = waveAmpPx(result) * waveEnv(x, span);
  const angle = ((x - span.bow) / lambda) * Math.PI * 2;
  return span.wl - amp * Math.cos(angle);
}

function waveFill(span: Span, result: HullSpeedResult): string {
  const step = Math.max(8, span.width / 90);
  const bits = [`M 0 ${span.height}`];
  for (let x = 0; x <= span.width; x += step) {
    bits.push(`L ${x.toFixed(1)} ${waveY(x, span, result).toFixed(1)}`);
  }
  bits.push(`L ${span.width.toFixed(1)} ${span.height} Z`);
  return `<path class="n-hull-sea" d="${bits.join(' ')}" />`;
}

function waveStroke(span: Span, result: HullSpeedResult): string {
  const step = Math.max(8, span.width / 90);
  const bits = [`M 0 ${waveY(0, span, result).toFixed(1)}`];
  for (let x = step; x <= span.width; x += step) {
    bits.push(`L ${x.toFixed(1)} ${waveY(x, span, result).toFixed(1)}`);
  }
  return `<path class="n-hull-foamline" d="${bits.join(' ')}" />`;
}

function foam(span: Span, result: HullSpeedResult): string {
  const y = waveY(span.bow, span, result);
  const r = 6 + waveAmpPx(result) / 5;
  return `<ellipse class="n-hull-foam" cx="${span.bow.toFixed(1)}" cy="${y.toFixed(1)}" rx="${(r * 1.8).toFixed(1)}" ry="${r.toFixed(1)}" />`;
}

function dimLine(span: Span, label: string): string {
  const y = span.wl + 112;
  const mid = (span.stern + span.bow) / 2;
  return [
    `<line class="n-hull-dim" x1="${span.stern.toFixed(1)}" y1="${y}" x2="${span.bow.toFixed(1)}" y2="${y}" />`,
    `<line class="n-hull-dim" x1="${span.stern.toFixed(1)}" y1="${y - 8}" x2="${span.stern.toFixed(1)}" y2="${y + 8}" />`,
    `<line class="n-hull-dim" x1="${span.bow.toFixed(1)}" y1="${y - 8}" x2="${span.bow.toFixed(1)}" y2="${y + 8}" />`,
    `<text class="n-hull-dimlabel" x="${mid.toFixed(1)}" y="${y + 24}" text-anchor="middle">${label}</text>`,
  ].join('');
}

function seaGroup(span: Span, result: HullSpeedResult): string {
  const deepY = span.height * 0.72;
  return [
    `<rect class="n-hull-sky" x="0" y="0" width="${span.width}" height="${span.height}" />`,
    waveFill(span, result),
    `<rect class="n-hull-deep" x="0" y="${deepY}" width="${span.width}" height="${span.height - deepY}" />`,
    waveStroke(span, result),
    foam(span, result),
  ].join('');
}

function boatGroup(span: Span, lift: number, kind: HullSpeedResult['hullKind']): string {
  return boatMarkup({
    stern: span.stern,
    bow: span.bow,
    wl: span.wl,
    lift,
    kind,
  });
}

export function sceneSvg(opts: { result: HullSpeedResult; unit: UnitSystem }): string {
  const { result, unit } = opts;
  const span = hullSpan(result.lwlMetres);
  const lift = hullLift(result);
  const box = `0 0 ${span.width.toFixed(0)} ${span.height.toFixed(0)}`;
  const suffix = unit === 'imperial' ? 'ft' : 'm';
  const label = `${formatNumber(displayLength(result.lwlMetres, unit), 1)} ${suffix}`;
  return [
    `<svg class="n-hull-svg" viewBox="${box}" preserveAspectRatio="xMidYMid meet" role="img" aria-hidden="true">`,
    seaGroup(span, result),
    boatGroup(span, lift, result.hullKind),
    dimLine(span, label),
    '</svg>',
  ].join('');
}

export function setText(el: Element | null, value: string): void {
  if (el) el.textContent = value;
}
