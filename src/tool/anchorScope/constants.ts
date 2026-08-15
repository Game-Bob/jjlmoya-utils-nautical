import type { RodeType, WindCondition, SeabedType, AnchorInputs } from './types';

export const BASE_SCOPE_RATIOS: Record<RodeType, Record<WindCondition, number>> = {
  'all-chain': {
    calm: 4,
    moderate: 5,
    strong: 7,
    storm: 8,
  },
  'rope-chain': {
    calm: 5,
    moderate: 7,
    strong: 8,
    storm: 10,
  },
  'all-rope': {
    calm: 7,
    moderate: 8,
    strong: 10,
    storm: 12,
  },
};

export const SEABED_MODIFIERS: Record<SeabedType, number> = {
  sand: 1.0,
  mud: 1.1,
  clay: 1.0,
  gravel: 1.25,
  rock: 1.5,
  weed: 1.4,
};

export const MIN_SAFE_SCOPE_RATIOS: Record<RodeType, number> = {
  'all-chain': 4,
  'rope-chain': 6,
  'all-rope': 7,
};

export const DEFAULT_INPUTS: AnchorInputs = {
  waterDepth: 6,
  bowHeight: 1.5,
  tideRange: 1.5,
  boatLength: 10,
  rodeType: 'all-chain',
  windCondition: 'moderate',
  seabedType: 'sand',
  unitSystem: 'metric',
};

export const FEET_TO_METERS = 0.3048;
export const METERS_TO_FEET = 3.28084;
