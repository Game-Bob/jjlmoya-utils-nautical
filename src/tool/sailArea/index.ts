import { sailArea } from './entry';
export * from './entry';
export const SAIL_AREA_TOOL: ToolDefinition = {
  entry: sailArea,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
