export interface BoatPreset {
  id: string;
  lwlMetres: number;
}

export const BOAT_PRESETS: BoatPreset[] = [
  { id: 'dinghy', lwlMetres: 4.2 },
  { id: 'daysailer', lwlMetres: 6.5 },
  { id: 'cruiser', lwlMetres: 10 },
  { id: 'bluewater', lwlMetres: 13.5 },
  { id: 'workboat', lwlMetres: 18 },
];

export function presetIdForLwl(lwlMetres: number): string | null {
  const found = BOAT_PRESETS.find((item) => Math.abs(item.lwlMetres - lwlMetres) < 0.05);
  return found ? found.id : null;
}
