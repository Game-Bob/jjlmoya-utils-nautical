import { endurance } from './entry';
export * from './entry';
export const ENDURANCE_TOOL: ToolDefinition = {
  entry: endurance,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
