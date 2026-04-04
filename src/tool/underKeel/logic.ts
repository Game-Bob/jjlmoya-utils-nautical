export interface TideParams {
  highTime: number;
  highHeight: number;
  lowTime: number;
  lowHeight: number;
}

export interface UnderKeelParams {
  draft: number;
  chartDepth: number;
  safetyMargin: number;
  tide: TideParams;
}

export type PassType = 'always' | 'never' | 'partial';

export interface PassWindow {
  type: PassType;
  start: number;
  end: number;
  neededDepth: number;
  tideRequired: number;
}

interface CycleData {
  flooding: boolean;
  sT: number;
  dur: number;
  sH: number;
  amp: number;
  mult: number;
  tH: number;
}

function getCycleData(tide: TideParams): CycleData {
  const { highTime: tH, highHeight: hH, lowTime: tL, lowHeight: hL } = tide;
  const flooding = tH > tL;
  return {
    flooding,
    sT: flooding ? tL : tH,
    dur: Math.abs(tH - tL),
    sH: flooding ? hL : hH,
    amp: Math.abs(hH - hL),
    mult: flooding ? 1 : -1,
    tH,
  };
}

function findPassOffset(target: number, dur: number): number {
  const doz = [1 / 12, 2 / 12, 3 / 12, 3 / 12, 2 / 12, 1 / 12];
  const step = dur / 6;
  let cum = 0;
  for (let i = 0; i < 6; i++) {
    const d = doz[i] ?? 0;
    if (cum + d >= target) return (i + (target - cum) / d) * step;
    cum += d;
  }
  return dur;
}

function calculatePartialWindow(tide: TideParams, tideRequired: number, neededDepth: number): PassWindow {
  const { flooding, sT, dur, sH, amp, mult, tH } = getCycleData(tide);
  const targetInt = (tideRequired - sH) / (mult * amp);
  const tOff = findPassOffset(targetInt, dur);
  const pT = sT + tOff;
  if (flooding) return { type: 'partial', start: pT, end: tH + (tH - pT), neededDepth, tideRequired };
  return { type: 'partial', start: tH - (pT - tH), end: pT, neededDepth, tideRequired };
}

export function calculatePassWindow(params: UnderKeelParams): PassWindow {
  const { draft, chartDepth, safetyMargin, tide } = params;
  const neededDepth = draft + safetyMargin;
  const tideRequired = Math.max(0, neededDepth - chartDepth);
  const maxTide = Math.max(tide.highHeight, tide.lowHeight);
  const minTide = Math.min(tide.highHeight, tide.lowHeight);

  if (tideRequired > maxTide) return { type: 'never', start: 0, end: 0, neededDepth, tideRequired };
  if (tideRequired <= minTide) {
    const { sT, dur } = getCycleData(tide);
    return { type: 'always', start: sT, end: sT + dur, neededDepth, tideRequired };
  }
  return calculatePartialWindow(tide, tideRequired, neededDepth);
}
