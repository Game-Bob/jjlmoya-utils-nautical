export type RodeType = 'all-chain' | 'rope-chain' | 'all-rope';
export type WindCondition = 'calm' | 'moderate' | 'strong' | 'storm';
export type SeabedType = 'sand' | 'mud' | 'clay' | 'gravel' | 'rock' | 'weed';
export type UnitSystem = 'metric' | 'imperial';
export type SafetyLevel = 'optimal' | 'caution' | 'danger';

export interface AnchorInputs {
  waterDepth: number;
  bowHeight: number;
  tideRange: number;
  boatLength: number;
  rodeType: RodeType;
  windCondition: WindCondition;
  seabedType: SeabedType;
  customScopeRatio?: number;
  unitSystem: UnitSystem;
}

export interface AnchorCalculationResult {
  totalDepth: number;
  effectiveScopeRatio: number;
  rodeLength: number;
  horizontalDistance: number;
  swingRadius: number;
  safetyLevel: SafetyLevel;
  minRecommendedRode: number;
  heavyWeatherRode: number;
}

export interface CatenaryPoint {
  x: number;
  y: number;
}
