export type UnitSystem = 'metric' | 'imperial';
export type HullKind = 'displacement' | 'semi' | 'planing';
export type SpeedBand = 'below' | 'near' | 'at' | 'above';

export interface HullSpeedInput {
  lwlMetres: number;
  hullKind: HullKind;
  observedKnots: number;
}

export interface HullSpeedResult {
  lwlMetres: number;
  lwlFeet: number;
  hullKind: HullKind;
  hullSpeedKnots: number;
  hullSpeedKmh: number;
  hullSpeedMph: number;
  speedLengthRatio: number;
  froudeNumber: number;
  band: SpeedBand;
  observedKnots: number;
}

export const METRES_PER_FOOT = 0.3048;
export const HULL_SPEED_FACTOR = 1.34;
export const GRAVITY_MS2 = 9.80665;
export const METRES_PER_NAUTICAL_MILE = 1852;
export const LWL_MIN_M = 2.5;
export const LWL_MAX_M = 40;
export const OBSERVED_MAX_KN = 40;
export const NEAR_RATIO = 1.1;

export function metresToFeet(metres: number): number {
  return metres / METRES_PER_FOOT;
}

export function feetToMetres(feet: number): number {
  return feet * METRES_PER_FOOT;
}

export function knotsToMetresPerSecond(knots: number): number {
  return (knots * METRES_PER_NAUTICAL_MILE) / 3600;
}

export function knotsToKmh(knots: number): number {
  return knots * 1.852;
}

export function knotsToMph(knots: number): number {
  return knotsToKmh(knots) / 1.609344;
}

export function clampLwlMetres(metres: number): number {
  if (Number.isNaN(metres)) return LWL_MIN_M;
  return Math.min(LWL_MAX_M, Math.max(LWL_MIN_M, metres));
}

export function clampObservedKnots(knots: number): number {
  if (Number.isNaN(knots) || knots < 0) return 0;
  return Math.min(OBSERVED_MAX_KN, knots);
}

export function displayLength(metres: number, unit: UnitSystem): number {
  if (unit === 'imperial') return metresToFeet(metres);
  return metres;
}

export function storeLength(displayed: number, unit: UnitSystem): number {
  if (unit === 'imperial') return feetToMetres(displayed);
  return displayed;
}

export function hullSpeedKnotsFromLwl(lwlMetres: number): number {
  const feet = metresToFeet(clampLwlMetres(lwlMetres));
  return HULL_SPEED_FACTOR * Math.sqrt(feet);
}

export function speedLengthRatio(speedKnots: number, lwlMetres: number): number {
  const feet = metresToFeet(clampLwlMetres(lwlMetres));
  const root = Math.sqrt(feet);
  if (root === 0) return 0;
  return speedKnots / root;
}

export function froudeNumber(speedKnots: number, lwlMetres: number): number {
  const length = clampLwlMetres(lwlMetres);
  const denom = Math.sqrt(GRAVITY_MS2 * length);
  if (denom === 0) return 0;
  return knotsToMetresPerSecond(speedKnots) / denom;
}

export function bandFromRatio(ratio: number): SpeedBand {
  if (Math.abs(ratio - HULL_SPEED_FACTOR) < 0.02) return 'at';
  if (ratio < NEAR_RATIO) return 'below';
  if (ratio < HULL_SPEED_FACTOR) return 'near';
  return 'above';
}

export function computeHullSpeed(input: HullSpeedInput): HullSpeedResult {
  const lwlMetres = clampLwlMetres(input.lwlMetres);
  const observedKnots = clampObservedKnots(input.observedKnots);
  const hullSpeedKnots = hullSpeedKnotsFromLwl(lwlMetres);
  const compareKnots = observedKnots > 0 ? observedKnots : hullSpeedKnots;
  return {
    lwlMetres,
    lwlFeet: metresToFeet(lwlMetres),
    hullKind: input.hullKind,
    hullSpeedKnots,
    hullSpeedKmh: knotsToKmh(hullSpeedKnots),
    hullSpeedMph: knotsToMph(hullSpeedKnots),
    speedLengthRatio: speedLengthRatio(compareKnots, lwlMetres),
    froudeNumber: froudeNumber(compareKnots, lwlMetres),
    band: bandFromRatio(speedLengthRatio(compareKnots, lwlMetres)),
    observedKnots,
  };
}
