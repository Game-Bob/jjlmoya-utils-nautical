export { nauticalCategory } from './category';
export const NauticalCategorySEO = () => import('./category/seo.astro').then((m) => m.default);

export type {
  KnownLocale,
  FAQItem,
  BibliographyEntry,
  HowToStep,
  ToolLocaleContent,
  CategoryLocaleContent,
  LocaleLoader,
  LocaleMap,
  NauticalToolEntry,
  NauticalCategoryEntry,
  ToolDefinition,
} from './types';

export { ALL_ENTRIES, ALL_TOOLS } from './tools';
export { tideCalculator, TIDE_CALCULATOR_TOOL } from './tool/tideCalculator';
export { underKeel, UNDER_KEEL_TOOL } from './tool/underKeel';
export { nauticalConverter, NAUTICAL_CONVERTER_TOOL } from './tool/nauticalConverter';
export { sailArea, SAIL_AREA_TOOL } from './tool/sailArea';
export { speedConverter, SPEED_CONVERTER_TOOL } from './tool/speedConverter';
export { endurance, ENDURANCE_TOOL } from './tool/endurance';
export { anchorScope, ANCHOR_SCOPE_TOOL } from './tool/anchorScope';
