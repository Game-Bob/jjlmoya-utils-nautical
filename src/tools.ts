import { TIDE_CALCULATOR_TOOL } from './tool/tideCalculator';
import { UNDER_KEEL_TOOL } from './tool/underKeel';
import { NAUTICAL_CONVERTER_TOOL } from './tool/nauticalConverter';
import { SAIL_AREA_TOOL } from './tool/sailArea';
import { SPEED_CONVERTER_TOOL } from './tool/speedConverter';
import { ENDURANCE_TOOL } from './tool/endurance';
import type { ToolDefinition } from './types';

export const ALL_TOOLS: ToolDefinition[] = [
  TIDE_CALCULATOR_TOOL,
  UNDER_KEEL_TOOL,
  NAUTICAL_CONVERTER_TOOL,
  SAIL_AREA_TOOL,
  SPEED_CONVERTER_TOOL,
  ENDURANCE_TOOL,
];

export {
  TIDE_CALCULATOR_TOOL,
  UNDER_KEEL_TOOL,
  NAUTICAL_CONVERTER_TOOL,
  SAIL_AREA_TOOL,
  SPEED_CONVERTER_TOOL,
  ENDURANCE_TOOL,
};
