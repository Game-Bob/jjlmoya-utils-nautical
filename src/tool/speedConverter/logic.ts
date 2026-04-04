export interface SpeedResult {
  knots: number;
  kmh: number;
  mph: number;
  ms: number;
  beaufort: number;
}

export interface BeaufortEntry {
  force: number;
  minKnots: number;
  maxKnots: number;
  description: string;
  seaState: string;
}

export const BEAUFORT_DATA: BeaufortEntry[] = [
  { force: 0, minKnots: 0, maxKnots: 1, description: 'Calm', seaState: 'Sea like a mirror' },
  { force: 1, minKnots: 1, maxKnots: 3, description: 'Light Air', seaState: 'Ripples without crests' },
  { force: 2, minKnots: 3, maxKnots: 6, description: 'Light Breeze', seaState: 'Small wavelets' },
  { force: 3, minKnots: 6, maxKnots: 10, description: 'Gentle Breeze', seaState: 'Large wavelets, scattered whitecaps' },
  { force: 4, minKnots: 10, maxKnots: 16, description: 'Moderate Breeze', seaState: 'Small waves, frequent whitecaps' },
  { force: 5, minKnots: 16, maxKnots: 21, description: 'Fresh Breeze', seaState: 'Moderate waves, many whitecaps' },
  { force: 6, minKnots: 21, maxKnots: 27, description: 'Strong Breeze', seaState: 'Large waves, extensive foam' },
  { force: 7, minKnots: 27, maxKnots: 33, description: 'Near Gale', seaState: 'Sea heaps up, foam streaks' },
  { force: 8, minKnots: 33, maxKnots: 40, description: 'Gale', seaState: 'Moderately high waves, spray' },
  { force: 9, minKnots: 40, maxKnots: 47, description: 'Strong Gale', seaState: 'High waves, dense foam' },
  { force: 10, minKnots: 47, maxKnots: 55, description: 'Storm', seaState: 'Very high waves, sea white' },
  { force: 11, minKnots: 55, maxKnots: 63, description: 'Violent Storm', seaState: 'Exceptionally high waves' },
  { force: 12, minKnots: 63, maxKnots: 999, description: 'Hurricane', seaState: 'Air filled with foam, visibility nil' },
];

export function knotsToKmh(knots: number): number {
  return knots * 1.852;
}

export function knotsToMph(knots: number): number {
  return knots * 1.15078;
}

export function knotsToMs(knots: number): number {
  return knots * 0.514444;
}

export function knotsToBeaufort(knots: number): number {
  for (let i = BEAUFORT_DATA.length - 1; i >= 0; i--) {
    if (knots >= BEAUFORT_DATA[i].minKnots) return BEAUFORT_DATA[i].force;
  }
  return 0;
}

export function beaufortToKnots(bf: number): number {
  const clamped = Math.max(0, Math.min(12, Math.round(bf)));
  return BEAUFORT_DATA[clamped].minKnots;
}

export function convertAllSpeeds(knots: number): SpeedResult {
  return {
    knots,
    kmh: knotsToKmh(knots),
    mph: knotsToMph(knots),
    ms: knotsToMs(knots),
    beaufort: knotsToBeaufort(knots),
  };
}
