export interface ConversionResult {
  [unit: string]: number;
}

export function convertDistance(meters: number): ConversionResult {
  return {
    nm: meters / 1852,
    km: meters / 1000,
    mi: meters / 1609.34,
    cable: meters / 185.2,
  };
}

export function convertSpeed(knots: number): ConversionResult {
  return {
    kn: knots,
    kmh: knots * 1.852,
    ms: knots * 0.514444,
    mph: knots * 1.15078,
  };
}

export function convertDepth(meters: number): ConversionResult {
  return {
    braza: meters / 1.8288,
    m: meters,
    ft: meters / 0.3048,
  };
}

export function convertPressure(hpa: number): ConversionResult {
  return {
    mbar: hpa,
    mmhg: hpa / 1.33322,
    inhg: hpa / 33.8639,
    atm: hpa / 1013.25,
  };
}

export interface BeaufortLevel {
  force: number;
  name: string;
  sea: string;
}

const BEAUFORT_THRESHOLDS: number[] = [1, 3, 6, 10, 16, 21, 27, 33, 40, 47, 55, 63];

export function getBeaufortLevel(knots: number): BeaufortLevel {
  const force = BEAUFORT_THRESHOLDS.findIndex((t) => knots < t);
  const resolvedForce = force === -1 ? 12 : force;
  return { force: resolvedForce, name: '', sea: '' };
}
