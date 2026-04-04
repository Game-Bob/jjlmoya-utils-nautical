export interface TideCyclePoint {
  t: number;
  h: number;
  p: string;
}

export interface CycleParams {
  sT: number;
  dur: number;
  amp: number;
  sH: number;
  mult: number;
}

export interface InterpolateParams {
  tT: number;
  sT: number;
  dur: number;
  amp: number;
  sH: number;
  mult: number;
}

export function timeToMins(s: string): number {
  const [h, m] = s.split(':').map(Number);
  return h * 60 + m;
}

export function minsToTime(m: number): string {
  let mins = Math.round(m) % 1440;
  if (mins < 0) mins += 1440;
  return `${String(Math.floor(mins / 60)).padStart(2, '0')}:${String(mins % 60).padStart(2, '0')}`;
}

export const TWELFTHS: number[] = [1 / 12, 2 / 12, 3 / 12, 3 / 12, 2 / 12, 1 / 12];

export function generateCycle({ sT, dur, amp, sH, mult }: CycleParams): TideCyclePoint[] {
  const step = dur / 6;
  let curH = sH;
  const pts: TideCyclePoint[] = [{ t: sT, h: sH, p: '0%' }];
  let cum = 0;
  for (let i = 0; i < 6; i++) {
    cum += TWELFTHS[i];
    curH = sH + cum * amp * mult;
    pts.push({ t: sT + step * (i + 1), h: curH, p: `${Math.round(cum * 100)}%` });
  }
  return pts;
}

export function interpolateHeight({ tT, sT, dur, amp, sH, mult }: InterpolateParams): number | null {
  const rel = tT - sT;
  if (rel < 0 || rel > dur) return null;
  const step = dur / 6;
  const idx = Math.floor(rel / step);
  let cum = 0;
  for (let i = 0; i < idx; i++) cum += TWELFTHS[i];
  const rem = (rel % step) / step;
  const curD = idx < 6 ? TWELFTHS[idx] : 0;
  return sH + (cum + curD * rem) * amp * mult;
}
