import type { HullKind, UnitSystem } from './logic';
import { clampLwlMetres, clampObservedKnots } from './logic';

export interface HullSpeedState {
  lwlMetres: number;
  hullKind: HullKind;
  observedKnots: number;
  unit: UnitSystem;
}

const KEY = 'n-hull-speed-v1';

const KINDS: HullKind[] = ['displacement', 'semi', 'planing'];

export const DEFAULT_STATE: HullSpeedState = {
  lwlMetres: 10,
  hullKind: 'displacement',
  observedKnots: 0,
  unit: 'metric',
};

function isKind(value: string): value is HullKind {
  return KINDS.includes(value as HullKind);
}

function asKind(value: unknown): HullKind {
  if (typeof value === 'string' && isKind(value)) return value;
  return DEFAULT_STATE.hullKind;
}

function readUnit(value: string): UnitSystem {
  if (value === 'imperial') return 'imperial';
  return 'metric';
}

export function loadState(): HullSpeedState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...DEFAULT_STATE };
    return parseState(raw);
  } catch {
    return { ...DEFAULT_STATE };
  }
}

export function parseState(raw: string): HullSpeedState {
  try {
    const data = JSON.parse(raw) as Partial<HullSpeedState>;
    const hullKind = asKind(data.hullKind);
    return {
      lwlMetres: clampLwlMetres(Number(data.lwlMetres)),
      hullKind,
      observedKnots: clampObservedKnots(Number(data.observedKnots)),
      unit: readUnit(String(data.unit)),
    };
  } catch {
    return { ...DEFAULT_STATE };
  }
}

export function saveState(state: HullSpeedState): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {}
}
