import { speedConverter } from './entry';
export * from './entry';
export const SPEED_CONVERTER_TOOL: ToolDefinition = {
  entry: speedConverter,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
