export * from './entry';
export const NAUTICAL_CONVERTER_TOOL: ToolDefinition = {
  entry: nauticalConverter,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
