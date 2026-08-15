import type { AnchorInputs } from './types';

const PRESET_MAP: Record<string, Partial<AnchorInputs>> = {
  calm: { waterDepth: 4, bowHeight: 1.2, tideRange: 0.8, boatLength: 8, windCondition: 'calm', seabedType: 'sand' },
  storm: { waterDepth: 8, bowHeight: 1.8, tideRange: 2.2, boatLength: 12, windCondition: 'storm', seabedType: 'mud' },
  moderate: { waterDepth: 6, bowHeight: 1.5, tideRange: 1.5, boatLength: 10, windCondition: 'moderate', seabedType: 'sand' },
};

export function getPresetInputs(preset: string | null, current: AnchorInputs): AnchorInputs {
  const overrides = (preset && PRESET_MAP[preset]) || PRESET_MAP.moderate;
  return { ...current, ...overrides };
}
