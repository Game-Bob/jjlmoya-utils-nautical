import type { HullSpeedUI } from './ui';
import type { HullKind, SpeedBand } from './logic';

export function bandCopy(ui: HullSpeedUI, band: SpeedBand, kind: HullKind): string {
  if (kind === 'planing' && band === 'above') return ui.bandPlane;
  if (band === 'below') return ui.bandBelow;
  if (band === 'near') return ui.bandNear;
  if (band === 'at') return ui.bandAt;
  return ui.bandAbove;
}

export function kindNote(ui: HullSpeedUI, kind: HullKind): string {
  if (kind === 'planing') return ui.planingNote;
  if (kind === 'semi') return ui.semiNote;
  return ui.displacementNote;
}

export function formatNumber(value: number, digits: number): string {
  return value.toFixed(digits);
}
