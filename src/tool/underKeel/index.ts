import { underKeel } from './entry';
export * from './entry';
export const UNDER_KEEL_TOOL: ToolDefinition = {
  entry: underKeel,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
