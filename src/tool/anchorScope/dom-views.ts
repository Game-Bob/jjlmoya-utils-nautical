import type { AnchorCalculationResult, AnchorInputs, CatenaryPoint, RodeType } from './types';
import type { EvaluationReport } from './evaluator';
import type { AnchorScopeUI } from './ui';
import { generateCatenaryCurve } from './logic';

export interface StatusBannerElements {
  badge: HTMLElement | null;
  title: HTMLElement | null;
  desc: HTMLElement | null;
}

export function updateMetricDisplay(
  el: HTMLElement | null,
  value: string | number,
  unit = '',
): void {
  if (!el) {
    return;
  }
  el.textContent = `${value}${unit ? ` ${unit}` : ''}`;
}

export function updateStatusBanner(
  elements: StatusBannerElements,
  report: EvaluationReport,
  result: AnchorCalculationResult,
  ui: AnchorScopeUI,
): void {
  if (elements.badge) {
    elements.badge.setAttribute('class', `asc-status-tag sc-status-${result.safetyLevel}`);
    elements.badge.textContent = result.safetyLevel.toUpperCase();
  }
  if (elements.title) {
    elements.title.textContent = ui[report.statusTitleKey] ?? '';
  }
  if (elements.desc) {
    elements.desc.textContent = ui[report.statusDescKey] ?? '';
  }
}

export function updateAdviceCards(
  seabedCardEl: HTMLElement | null,
  catenaryCardEl: HTMLElement | null,
  report: EvaluationReport,
  ui: AnchorScopeUI,
): void {
  if (seabedCardEl) {
    seabedCardEl.textContent = ui[report.holdingAdviceKey] ?? '';
  }
  if (catenaryCardEl) {
    catenaryCardEl.textContent = ui[report.catenaryEffectKey] ?? '';
  }
}

export function buildCatenarySvgPath(start: CatenaryPoint, end: CatenaryPoint, sag: number): string {
  const seabedTouch = { x: 120, y: 215 };
  const points = generateCatenaryCurve({ start, end: seabedTouch, sagFactor: sag, pointsCount: 16 });
  if (points.length === 0) {
    return '';
  }
  let path = `M ${points[0]?.x.toFixed(1)} ${points[0]?.y.toFixed(1)}`;
  for (let i = 1; i < points.length; i++) {
    path += ` L ${points[i]?.x.toFixed(1)} ${points[i]?.y.toFixed(1)}`;
  }
  path += ` L ${end.x.toFixed(1)} ${end.y.toFixed(1)}`;
  return path;
}

function getSagForRode(rode: RodeType): number {
  if (rode === 'all-chain') {
    return 38;
  }
  if (rode === 'rope-chain') {
    return 20;
  }
  return 6;
}

export function renderVisualProfile(
  svgEl: SVGSVGElement | null,
  inputs: AnchorInputs,
  result: AnchorCalculationResult,
): void {
  if (!svgEl) {
    return;
  }
  const start = { x: 485, y: 75 };
  const end = { x: 75, y: 215 };
  const sag = getSagForRode(inputs.rodeType);

  const rodePathEl = svgEl.querySelector<SVGPathElement>('#sc-catenary-line');
  const depthTextEl = svgEl.querySelector<SVGTextElement>('#sc-svg-depth-text');
  const tideRectEl = svgEl.querySelector<SVGRectElement>('#sc-tide-water');

  if (rodePathEl) {
    rodePathEl.setAttribute('d', buildCatenarySvgPath(start, end, sag));
  }
  if (depthTextEl) {
    depthTextEl.textContent = `${result.totalDepth}m`;
  }
  if (tideRectEl) {
    const tideH = Math.min(25, Math.max(5, inputs.tideRange * 6));
    tideRectEl.setAttribute('height', tideH.toString());
    tideRectEl.setAttribute('y', (80 - tideH).toString());
  }
}
