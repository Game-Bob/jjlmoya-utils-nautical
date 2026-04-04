export type DistanceUnit = 'nm' | 'km' | 'mi' | 'm';
export type SpeedUnit = 'knots' | 'kmh' | 'mph' | 'ms';
export type DepthUnit = 'm' | 'ft' | 'fathom';
export type PressureUnit = 'mbar' | 'hPa' | 'psi' | 'atm' | 'mmHg';

const DISTANCE_TO_M: Record<DistanceUnit, number> = {
  nm: 1852,
  km: 1000,
  mi: 1609.344,
  m: 1,
};

const SPEED_TO_MS: Record<SpeedUnit, number> = {
  knots: 0.514444,
  kmh: 0.277778,
  mph: 0.44704,
  ms: 1,
};

const DEPTH_TO_M: Record<DepthUnit, number> = {
  m: 1,
  ft: 0.3048,
  fathom: 1.8288,
};

const PRESSURE_TO_MBAR: Record<PressureUnit, number> = {
  mbar: 1,
  hPa: 1,
  psi: 68.9476,
  atm: 1013.25,
  mmHg: 1.33322,
};

export function convertDistance(value: number, from: DistanceUnit, to: DistanceUnit): number {
  const meters = value * DISTANCE_TO_M[from];
  return meters / DISTANCE_TO_M[to];
}

export function convertSpeed(value: number, from: SpeedUnit, to: SpeedUnit): number {
  const ms = value * SPEED_TO_MS[from];
  return ms / SPEED_TO_MS[to];
}

export function convertDepth(value: number, from: DepthUnit, to: DepthUnit): number {
  const m = value * DEPTH_TO_M[from];
  return m / DEPTH_TO_M[to];
}

export function convertPressure(value: number, from: PressureUnit, to: PressureUnit): number {
  const mbar = value * PRESSURE_TO_MBAR[from];
  return mbar / PRESSURE_TO_MBAR[to];
}

export interface BeaufortEntry {
  force: number;
  minKnots: number;
  maxKnots: number;
  description: string;
}

export const BEAUFORT_SCALE: BeaufortEntry[] = [
  { force: 0, minKnots: 0, maxKnots: 1, description: 'Calm' },
  { force: 1, minKnots: 1, maxKnots: 3, description: 'Light Air' },
  { force: 2, minKnots: 3, maxKnots: 6, description: 'Light Breeze' },
  { force: 3, minKnots: 6, maxKnots: 10, description: 'Gentle Breeze' },
  { force: 4, minKnots: 10, maxKnots: 16, description: 'Moderate Breeze' },
  { force: 5, minKnots: 16, maxKnots: 21, description: 'Fresh Breeze' },
  { force: 6, minKnots: 21, maxKnots: 27, description: 'Strong Breeze' },
  { force: 7, minKnots: 27, maxKnots: 33, description: 'Near Gale' },
  { force: 8, minKnots: 33, maxKnots: 40, description: 'Gale' },
  { force: 9, minKnots: 40, maxKnots: 47, description: 'Strong Gale' },
  { force: 10, minKnots: 47, maxKnots: 55, description: 'Storm' },
  { force: 11, minKnots: 55, maxKnots: 63, description: 'Violent Storm' },
  { force: 12, minKnots: 63, maxKnots: 999, description: 'Hurricane' },
];
