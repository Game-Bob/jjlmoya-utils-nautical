import { describe, expect, it } from 'vitest';
import { DEFAULT_STATE, parseState } from './storage';

describe('hull speed storage', () => {
  it('returns defaults for invalid json', () => {
    expect(parseState('{')).toEqual(DEFAULT_STATE);
  });

  it('clamps saved waterline and speed', () => {
    const parsed = parseState(
      JSON.stringify({ lwlMetres: 90, hullKind: 'semi', observedKnots: -2, unit: 'imperial' }),
    );
    expect(parsed.lwlMetres).toBe(40);
    expect(parsed.hullKind).toBe('semi');
    expect(parsed.observedKnots).toBe(0);
    expect(parsed.unit).toBe('imperial');
  });

  it('rejects unknown hull kinds', () => {
    const parsed = parseState(JSON.stringify({ hullKind: 'foil' }));
    expect(parsed.hullKind).toBe('displacement');
  });
});
