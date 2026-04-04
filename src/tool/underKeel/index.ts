import type { NauticalToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import UnderKeelComponent from './component.astro';
import UnderKeelSEO from './seo.astro';
import UnderKeelBibliography from './bibliography.astro';

export interface UnderKeelUI {
  [key: string]: string;
  parametersLabel: string;
  boatDraftLabel: string;
  chartDepthLabel: string;
  safetyMarginLabel: string;
  highTideLabel: string;
  lowTideLabel: string;
  metersLabel: string;
  passWindowLabel: string;
  neededLabel: string;
  tideRequiredLabel: string;
  statusNeverLabel: string;
  statusAlwaysLabel: string;
  statusFromLabel: string;
  statusUntilLabel: string;
  bottomLabel: string;
  faqTitle: string;
  bibliographyTitle: string;
}

export type UnderKeelLocaleContent = ToolLocaleContent<UnderKeelUI>;

export const underKeel: NauticalToolEntry<UnderKeelUI> = {
  id: 'under-keel',
  icons: {
    bg: 'mdi:ferry',
    fg: 'mdi:anchor',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { UnderKeelComponent, UnderKeelSEO, UnderKeelBibliography };

export const UNDER_KEEL_TOOL: ToolDefinition = {
  entry: underKeel,
  Component: UnderKeelComponent,
  SEOComponent: UnderKeelSEO,
  BibliographyComponent: UnderKeelBibliography,
};
