import { describe, it, expect } from 'vitest';
import {
  calculateTotalHeight,
  getRecommendedScopeRatio,
  calculateRodeLength,
  calculateHorizontalDistance,
  calculateSwingRadius,
  evaluateSafety,
  computeAnchorCalculations,
  generateCatenaryCurve,
} from './logic';
import type { AnchorInputs } from './types';

describe('AnchorScope Logic Suite', () => {
  const baseInputs: AnchorInputs = {
    waterDepth: 5,
    bowHeight: 1.5,
    tideRange: 1.5,
    boatLength: 10,
    rodeType: 'all-chain',
    windCondition: 'moderate',
    seabedType: 'sand',
    unitSystem: 'metric',
  };

  it('calculates total height correctly', () => {
    expect(calculateTotalHeight(5, 1.5, 1.5)).toBe(8);
    expect(calculateTotalHeight(0, 0, 0)).toBe(0);
    expect(calculateTotalHeight(-2, 1, 1)).toBe(2);
  });

  it('computes recommended scope ratio for all-chain', () => {
    const ratio = getRecommendedScopeRatio(baseInputs);
    expect(ratio).toBe(5);
  });

  it('adjusts scope ratio for rocky seabed and storm conditions', () => {
    const stormInputs: AnchorInputs = {
      ...baseInputs,
      rodeType: 'rope-chain',
      windCondition: 'storm',
      seabedType: 'rock',
    };
    const ratio = getRecommendedScopeRatio(stormInputs);
    expect(ratio).toBe(15);
  });

  it('uses custom scope ratio when provided', () => {
    const customInputs: AnchorInputs = {
      ...baseInputs,
      customScopeRatio: 6.5,
    };
    expect(getRecommendedScopeRatio(customInputs)).toBe(6.5);
  });

  it('calculates rode length correctly', () => {
    expect(calculateRodeLength(8, 5)).toBe(40);
  });

  it('calculates horizontal distance correctly', () => {
    const dist = calculateHorizontalDistance(10, 6);
    expect(dist).toBe(8);
    expect(calculateHorizontalDistance(5, 8)).toBe(0);
  });

  it('calculates swing radius with safety buffer', () => {
    expect(calculateSwingRadius(20, 10)).toBe(33);
  });

  it('evaluates safety thresholds accurately', () => {
    expect(evaluateSafety(7, 'all-chain')).toBe('optimal');
    expect(evaluateSafety(4.5, 'all-chain')).toBe('caution');
    expect(evaluateSafety(3, 'all-chain')).toBe('danger');
  });

  it('computes full calculation result object', () => {
    const res = computeAnchorCalculations(baseInputs);
    expect(res.totalDepth).toBe(8);
    expect(res.effectiveScopeRatio).toBe(5);
    expect(res.rodeLength).toBe(40);
    expect(res.horizontalDistance).toBeCloseTo(39.2, 1);
    expect(res.swingRadius).toBeCloseTo(52.2, 1);
    expect(res.safetyLevel).toBe('caution');
    expect(res.minRecommendedRode).toBe(32);
    expect(res.heavyWeatherRode).toBe(64);
  });

  it('generates smooth catenary curve points', () => {
    const points = generateCatenaryCurve({
      start: { x: 0, y: 0 },
      end: { x: 100, y: 100 },
      sagFactor: 20,
      pointsCount: 10,
    });
    expect(points.length).toBe(11);
    expect(points[0]?.x).toBe(0);
    expect(points[10]?.x).toBe(100);
    expect(points[5]?.y).toBeGreaterThan(50);
  });
});
