import type { AnchorCalculationResult, AnchorInputs } from './types';

export interface EvaluationReport {
  statusTitleKey: string;
  statusDescKey: string;
  holdingAdviceKey: string;
  catenaryEffectKey: string;
}

export function evaluateAnchorSecurity(
  inputs: AnchorInputs,
  result: AnchorCalculationResult,
): EvaluationReport {
  return {
    statusTitleKey: getStatusTitleKey(result.safetyLevel),
    statusDescKey: getStatusDescKey(result.safetyLevel),
    holdingAdviceKey: getHoldingAdviceKey(inputs.seabedType),
    catenaryEffectKey: getCatenaryEffectKey(inputs.rodeType),
  };
}

function getStatusTitleKey(level: AnchorCalculationResult['safetyLevel']): string {
  if (level === 'optimal') {
    return 'statusOptimalTitle';
  }
  if (level === 'caution') {
    return 'statusCautionTitle';
  }
  return 'statusDangerTitle';
}

function getStatusDescKey(level: AnchorCalculationResult['safetyLevel']): string {
  if (level === 'optimal') {
    return 'statusOptimalDesc';
  }
  if (level === 'caution') {
    return 'statusCautionDesc';
  }
  return 'statusDangerDesc';
}

function getHoldingAdviceKey(seabed: AnchorInputs['seabedType']): string {
  const map: Record<AnchorInputs['seabedType'], string> = {
    sand: 'adviceSand',
    mud: 'adviceMud',
    clay: 'adviceClay',
    gravel: 'adviceGravel',
    rock: 'adviceRock',
    weed: 'adviceWeed',
  };
  return map[seabed] ?? 'adviceSand';
}

function getCatenaryEffectKey(rode: AnchorInputs['rodeType']): string {
  const map: Record<AnchorInputs['rodeType'], string> = {
    'all-chain': 'catenaryAllChain',
    'rope-chain': 'catenaryRopeChain',
    'all-rope': 'catenaryAllRope',
  };
  return map[rode] ?? 'catenaryAllChain';
}
