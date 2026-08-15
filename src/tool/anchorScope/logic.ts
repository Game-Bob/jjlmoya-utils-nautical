import type { AnchorInputs, AnchorCalculationResult, CatenaryPoint, SafetyLevel } from './types';
import { BASE_SCOPE_RATIOS, SEABED_MODIFIERS, MIN_SAFE_SCOPE_RATIOS } from './constants';

export interface CatenaryParams {
  start: CatenaryPoint;
  end: CatenaryPoint;
  sagFactor: number;
  pointsCount?: number;
}

export function calculateTotalHeight(waterDepth: number, bowHeight: number, tideRange: number): number {
  return Math.max(0, waterDepth) + Math.max(0, bowHeight) + Math.max(0, tideRange);
}

export function getRecommendedScopeRatio(inputs: AnchorInputs): number {
  if (inputs.customScopeRatio && inputs.customScopeRatio > 0) {
    return inputs.customScopeRatio;
  }
  const base = BASE_SCOPE_RATIOS[inputs.rodeType][inputs.windCondition];
  const seabedFactor = SEABED_MODIFIERS[inputs.seabedType];
  return Math.round(base * seabedFactor * 10) / 10;
}

export function calculateRodeLength(totalHeight: number, scopeRatio: number): number {
  return Math.round(totalHeight * scopeRatio * 10) / 10;
}

export function calculateHorizontalDistance(rodeLength: number, totalHeight: number): number {
  if (rodeLength <= totalHeight) {
    return 0;
  }
  return Math.round(Math.sqrt(Math.max(0, rodeLength * rodeLength - totalHeight * totalHeight)) * 10) / 10;
}

export function calculateSwingRadius(horizontalDistance: number, boatLength: number): number {
  const safetyBuffer = 3;
  return Math.round((horizontalDistance + Math.max(0, boatLength) + safetyBuffer) * 10) / 10;
}

export function evaluateSafety(scopeRatio: number, rodeType: AnchorInputs['rodeType']): SafetyLevel {
  const minSafe = MIN_SAFE_SCOPE_RATIOS[rodeType];
  if (scopeRatio >= minSafe + 2) {
    return 'optimal';
  }
  if (scopeRatio >= minSafe) {
    return 'caution';
  }
  return 'danger';
}

export function computeAnchorCalculations(inputs: AnchorInputs): AnchorCalculationResult {
  const totalHeight = calculateTotalHeight(inputs.waterDepth, inputs.bowHeight, inputs.tideRange);
  const effectiveScopeRatio = getRecommendedScopeRatio(inputs);
  const rodeLength = calculateRodeLength(totalHeight, effectiveScopeRatio);
  const horizontalDistance = calculateHorizontalDistance(rodeLength, totalHeight);
  const swingRadius = calculateSwingRadius(horizontalDistance, inputs.boatLength);
  const safetyLevel = evaluateSafety(effectiveScopeRatio, inputs.rodeType);
  const minRecommendedRode = calculateRodeLength(totalHeight, MIN_SAFE_SCOPE_RATIOS[inputs.rodeType]);
  const heavyWeatherRode = calculateRodeLength(totalHeight, BASE_SCOPE_RATIOS[inputs.rodeType].storm);

  return {
    totalDepth: Math.round(totalHeight * 10) / 10,
    effectiveScopeRatio,
    rodeLength,
    horizontalDistance,
    swingRadius,
    safetyLevel,
    minRecommendedRode,
    heavyWeatherRode,
  };
}

export function generateCatenaryCurve(params: CatenaryParams): CatenaryPoint[] {
  const count = params.pointsCount ?? 20;
  const points: CatenaryPoint[] = [];
  for (let i = 0; i <= count; i++) {
    const t = i / count;
    const x = params.start.x + (params.end.x - params.start.x) * t;
    const linearY = params.start.y + (params.end.y - params.start.y) * t;
    const sag = Math.sin(t * Math.PI) * params.sagFactor;
    points.push({ x, y: linearY + sag });
  }
  return points;
}
