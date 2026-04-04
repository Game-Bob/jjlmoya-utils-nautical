import { TIDE_CALCULATOR_TOOL } from './tool/tideCalculator';
import { UNDER_KEEL_TOOL } from './tool/underKeel';
import { NAUTICAL_CONVERTER_TOOL } from './tool/nauticalConverter';
import type { ToolDefinition } from './types';

export const ALL_TOOLS: ToolDefinition[] = [
  TIDE_CALCULATOR_TOOL,
  UNDER_KEEL_TOOL,
  NAUTICAL_CONVERTER_TOOL,
];

export {
  TIDE_CALCULATOR_TOOL,
  UNDER_KEEL_TOOL,
  NAUTICAL_CONVERTER_TOOL,
};
