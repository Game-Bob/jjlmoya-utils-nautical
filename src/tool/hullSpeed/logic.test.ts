import { describe, expect, it } from 'vitest';
import {
  bandFromRatio,
  clampLwlMetres,
  clampObservedKnots,
  computeHullSpeed,
  displayLength,
  feetToMetres,
  froudeNumber,
  HULL_SPEED_FACTOR,
  hullSpeedKnotsFromLwl,
  knotsToKmh,
  knotsToMph,
  LWL_MAX_M,
  LWL_MIN_M,
  metresToFeet,
  speedLengthRatio,
  storeLength,
} from './logic';

describe('hull speed geometry', () => {
  it('converts metres and feet without drift on a round trip', () => {
    const metres = 10;
    expect(feetToMetres(metresToFeet(metres))).toBeCloseTo(metres, 10);
  });

  it('uses 1.34 times sqrt of waterline in feet', () => {
    const lwlM = 10;
    const expected = HULL_SPEED_FACTOR * Math.sqrt(metresToFeet(lwlM));
    expect(hullSpeedKnotsFromLwl(lwlM)).toBeCloseTo(expected, 8);
    expect(hullSpeedKnotsFromLwl(lwlM)).toBeCloseTo(7.676, 2);
  });

  it('keeps speed-length ratio equal to the factor at hull speed', () => {
    const lwlM = 12;
    const hs = hullSpeedKnotsFromLwl(lwlM);
    expect(speedLengthRatio(hs, lwlM)).toBeCloseTo(HULL_SPEED_FACTOR, 8);
  });

  it('returns a Froude number near 0.40 at hull speed', () => {
    const lwlM = 10;
    const hs = hullSpeedKnotsFromLwl(lwlM);
    expect(froudeNumber(hs, lwlM)).toBeGreaterThan(0.39);
    expect(froudeNumber(hs, lwlM)).toBeLessThan(0.41);
  });
});

describe('units and clamps', () => {
  it('displays feet in imperial and metres in metric', () => {
    expect(displayLength(10, 'metric')).toBe(10);
    expect(displayLength(10, 'imperial')).toBeCloseTo(metresToFeet(10), 8);
    expect(storeLength(32.80839895013123, 'imperial')).toBeCloseTo(10, 6);
    expect(storeLength(10, 'metric')).toBe(10);
  });

  it('clamps waterline and observed speed', () => {
    expect(clampLwlMetres(Number.NaN)).toBe(LWL_MIN_M);
    expect(clampLwlMetres(0)).toBe(LWL_MIN_M);
    expect(clampLwlMetres(99)).toBe(LWL_MAX_M);
    expect(clampObservedKnots(-4)).toBe(0);
    expect(clampObservedKnots(Number.NaN)).toBe(0);
    expect(clampObservedKnots(80)).toBe(40);
  });

  it('converts knots to km/h and mph', () => {
    expect(knotsToKmh(10)).toBeCloseTo(18.52, 6);
    expect(knotsToMph(10)).toBeCloseTo(11.5078, 3);
  });
});

describe('bands', () => {
  it('marks below, near, at and above the wave barrier', () => {
    expect(bandFromRatio(0.9)).toBe('below');
    expect(bandFromRatio(1.2)).toBe('near');
    expect(bandFromRatio(1.34)).toBe('at');
    expect(bandFromRatio(1.8)).toBe('above');
  });
});

describe('computeHullSpeed', () => {
  it('uses hull speed as the compared speed when observed is zero', () => {
    const result = computeHullSpeed({
      lwlMetres: 10,
      hullKind: 'displacement',
      observedKnots: 0,
    });
    expect(result.band).toBe('at');
    expect(result.hullSpeedKnots).toBeCloseTo(7.676, 2);
    expect(result.observedKnots).toBe(0);
  });

  it('classifies an observed speed above hull speed', () => {
    const result = computeHullSpeed({
      lwlMetres: 10,
      hullKind: 'planing',
      observedKnots: 18,
    });
    expect(result.band).toBe('above');
    expect(result.speedLengthRatio).toBeGreaterThan(HULL_SPEED_FACTOR);
  });

  it('treats a ratio within 0.02 of 1.34 as at hull speed', () => {
    expect(bandFromRatio(1.33)).toBe('at');
  });
});
