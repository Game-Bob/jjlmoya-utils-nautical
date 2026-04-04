import { TIDE_CALCULATOR_TOOL } from './tool/tideCalculator';
import { UNDER_KEEL_TOOL } from './tool/underKeel';
import type { ToolDefinition } from './types';

export const ALL_TOOLS: ToolDefinition[] = [
  TIDE_CALCULATOR_TOOL,
  UNDER_KEEL_TOOL,
];

export {
  TIDE_CALCULATOR_TOOL,
  UNDER_KEEL_TOOL,
};
