import type { AnchorInputs } from './types';
import { DEFAULT_INPUTS } from './constants';

const STORAGE_KEY = 'jjlmoya_anchor_scope_inputs';

export function saveAnchorInputs(inputs: AnchorInputs): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inputs));
  } catch {
    return;
  }
}

export function loadAnchorInputs(): AnchorInputs {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { ...DEFAULT_INPUTS };
    }
    const parsed = JSON.parse(raw) as Partial<AnchorInputs>;
    return { ...DEFAULT_INPUTS, ...parsed };
  } catch {
    return { ...DEFAULT_INPUTS };
  }
}
