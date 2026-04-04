export const DOZ = [1 / 12, 2 / 12, 3 / 12, 3 / 12, 2 / 12, 1 / 12] as const;

export function timeToMins(s: string): number {
  const [h, m] = s.split(':').map(Number);
  return h * 60 + m;
}

export function minsToTime(m: number): string {
  let mins = Math.round(m) % 1440;
  if (mins < 0) mins += 1440;
  return `${String(Math.floor(mins / 60)).padStart(2, '0')}:${String(mins % 60).padStart(2, '0')}`;
}

export interface CyclePoint {
  t: number;
  h: number;
  p: string;
}

export function generateCycle(
  sT: number,
  dur: number,
  amp: number,
  sH: number,
  mult: number,
): CyclePoint[] {
  const step = dur / 6;
  let curH = sH;
  const pts: CyclePoint[] = [{ t: sT, h: sH, p: '0%' }];
  let cum = 0;
  for (let i = 0; i < 6; i++) {
    cum += DOZ[i];
    curH = sH + cum * amp * mult;
    pts.push({ t: sT + step * (i + 1), h: curH, p: `${Math.round(cum * 100)}%` });
  }
  return pts;
}

export interface InterpolationResult {
  height: number | null;
  status: 'up' | 'down' | 'out';
}

export function interpolateHeight(
  tT: number,
  sT: number,
  dur: number,
  amp: number,
  sH: number,
  mult: number,
): InterpolationResult {
  const rel = tT - sT;
  if (rel < 0 || rel > dur) return { height: null, status: 'out' };
  const step = dur / 6;
  const idx = Math.floor(rel / step);
  let cum = 0;
  for (let i = 0; i < idx; i++) cum += DOZ[i];
  const rem = (rel % step) / step;
  const curD = idx < 6 ? DOZ[idx] : 0;
  const h = sH + (cum + curD * rem) * amp * mult;
  return { height: h, status: mult > 0 ? 'up' : 'down' };
}
