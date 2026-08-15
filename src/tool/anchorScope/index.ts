import type { ToolDefinition } from '../../types';
import { anchorScope } from './entry';
export * from './entry';

export const ANCHOR_SCOPE_TOOL: ToolDefinition = {
  entry: anchorScope,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
