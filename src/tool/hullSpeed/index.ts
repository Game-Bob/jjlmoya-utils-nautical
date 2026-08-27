import type { ToolDefinition } from '../../types';
import { hullSpeed } from './entry';

export * from './entry';

export const HULL_SPEED_TOOL: ToolDefinition = {
  entry: hullSpeed,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
