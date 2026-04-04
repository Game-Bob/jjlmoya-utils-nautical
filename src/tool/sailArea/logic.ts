export interface RigDimensions {
  p: number;
  e: number;
  i: number;
  j: number;
  py?: number;
  ey?: number;
  overlap: number;
}

export type RigType = 'sloop' | 'cutter' | 'ketch';

export interface SailAreaResult {
  mainArea: number;
  genoaArea: number;
  totalArea: number;
  totalSqFt: number;
}

export interface SADResult {
  ratio: number;
  verdict: string;
  power: string;
  gaugePos: number;
}

function getVerdictAndPower(sad: number): { verdict: string; power: string } {
  if (sad < 14) return { verdict: 'Desplazamiento Pesado', power: 'Moderada' };
  if (sad < 16.5) return { verdict: 'Crucero de Travesia', power: 'Moderada' };
  if (sad < 20) return { verdict: 'Crucero Estandar', power: 'Optima' };
  if (sad < 25) return { verdict: 'Performance Cruiser', power: 'Alta' };
  return { verdict: 'Regata / Sport', power: 'Extrema' };
}

export function calculateSailArea(dims: RigDimensions, rig: RigType): SailAreaResult {
  const { p, e, i, j, py, ey, overlap } = dims;
  const mainArea = 0.5 * p * e;
  const genoaArea = 0.5 * i * j * overlap;
  let totalArea = mainArea + genoaArea;
  if (rig === 'ketch' && py != null && ey != null) {
    totalArea += 0.5 * py * ey;
  }
  if (rig === 'cutter') {
    totalArea += 0.5 * i * j * 0.4;
  }
  const totalSqFt = totalArea * 10.7639;
  return { mainArea, genoaArea, totalArea, totalSqFt };
}

export function calculateSAD(totalSqFt: number, dispLbs: number): SADResult {
  const ratio = totalSqFt / Math.pow(dispLbs / 64, 2 / 3);
  const { verdict, power } = getVerdictAndPower(ratio);
  const gaugePos = Math.min(100, Math.max(0, (ratio - 10) * 4));
  return { ratio, verdict, power, gaugePos };
}
