export interface SpeedResult {
  kn: number;
  kmh: number;
  ms: number;
  mph: number;
}

export interface BeaufortEntry {
  force: number;
  name: string;
  sea: string;
  effect: string;
  knMin: number;
  knMax: number;
}

export const BEAUFORT_SCALE: BeaufortEntry[] = [
  { force: 0, name: 'Calm', sea: 'Sea like a mirror', effect: 'Smoke rises vertically', knMin: 0, knMax: 1 },
  { force: 1, name: 'Light air', sea: 'Ripples with appearance of scales', effect: 'Direction shown by smoke drift', knMin: 1, knMax: 4 },
  { force: 2, name: 'Light breeze', sea: 'Small wavelets, crests not breaking', effect: 'Wind felt on face', knMin: 4, knMax: 7 },
  { force: 3, name: 'Gentle breeze', sea: 'Large wavelets, scattered whitecaps', effect: 'Leaves and twigs in motion', knMin: 7, knMax: 11 },
  { force: 4, name: 'Moderate breeze', sea: 'Small waves, frequent whitecaps', effect: 'Dust and loose paper raised', knMin: 11, knMax: 17 },
  { force: 5, name: 'Fresh breeze', sea: 'Moderate waves, many whitecaps', effect: 'Small trees begin to sway', knMin: 17, knMax: 22 },
  { force: 6, name: 'Strong breeze', sea: 'Large waves, white foam crests', effect: 'Difficulty using umbrella', knMin: 22, knMax: 28 },
  { force: 7, name: 'Near gale', sea: 'Sea heaps up, foam blown in streaks', effect: 'Difficult to walk', knMin: 28, knMax: 34 },
  { force: 8, name: 'Gale', sea: 'High waves, spray reduces visibility', effect: 'Great difficulty walking', knMin: 34, knMax: 41 },
  { force: 9, name: 'Strong gale', sea: 'Very high waves, sea rolls', effect: 'Structural damage occurs', knMin: 41, knMax: 48 },
  { force: 10, name: 'Storm', sea: 'Exceptionally high waves, sea white', effect: 'Trees uprooted', knMin: 48, knMax: 56 },
  { force: 11, name: 'Violent storm', sea: 'Huge waves, foam covers sea', effect: 'Widespread damage', knMin: 56, knMax: 64 },
  { force: 12, name: 'Hurricane', sea: 'Air filled with foam and spray', effect: 'Total catastrophe', knMin: 64, knMax: Infinity },
];

export function convertFromKnots(kn: number): SpeedResult {
  return {
    kn,
    kmh: kn * 1.852,
    ms: kn * 0.514444,
    mph: kn * 1.15078,
  };
}

export function getBeaufortForce(kn: number): number {
  const thresholds = [1, 4, 7, 11, 17, 22, 28, 34, 41, 48, 56, 64];
  for (let i = 0; i < thresholds.length; i++) {
    if (kn < (thresholds[i] ?? Infinity)) return i;
  }
  return 12;
}
