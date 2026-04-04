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

export function findTOffset(target: number, dur: number): number {
  const step = dur / 6;
  let cum = 0;
  for (let i = 0; i < 6; i++) {
    if (cum + TWELFTHS[i] >= target) return (i + (target - cum) / TWELFTHS[i]) * step;
    cum += TWELFTHS[i];
  }
  return dur;
}

export interface PassWindow {
  status: string;
  start: string;
  end: string;
  variant: string;
}

export interface PassWindowParams {
  dr: number;
  sd: number;
  mg: number;
  hH: number;
  hL: number;
  tH: number;
  tL: number;
}

export function calculatePassWindow({ dr, sd, mg, hH, hL, tH, tL }: PassWindowParams): PassWindow {
  const needed = dr + mg;
  const tideReq = Math.max(0, needed - sd);
  const dur = Math.abs(tH - tL);
  const amp = Math.abs(hH - hL);
  const flooding = tH > tL;
  const sT = flooding ? tL : tH;

  if (tideReq > hH) {
    return { status: 'Nunca hay calado', start: '--:--', end: '--:--', variant: 'danger' };
  }
  if (tideReq <= hL) {
    return { status: 'Paso libre todo el ciclo', start: minsToTime(sT), end: minsToTime(sT + dur), variant: 'success' };
  }

  const sH = flooding ? hL : hH;
  const mult = flooding ? 1 : -1;
  const targetInt = (tideReq - sH) / (mult * amp);
  const tOff = findTOffset(targetInt, dur);
  const pT = sT + tOff;

  if (flooding) {
    return { status: 'Desde las:', start: minsToTime(pT), end: minsToTime(tH + (tH - pT)), variant: 'warning' };
  }
  return { status: 'Hasta las:', start: minsToTime(tH - (pT - tH)), end: minsToTime(pT), variant: 'warning' };
}
