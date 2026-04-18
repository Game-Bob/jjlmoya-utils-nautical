import { tideCalculator } from './entry';
export * from './entry';
export const TIDE_CALCULATOR_TOOL: ToolDefinition = {
  entry: tideCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
