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
    de: () => import('./i18n/de').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
  },
};

export { UnderKeelComponent, UnderKeelSEO, UnderKeelBibliography };

export const UNDER_KEEL_TOOL: ToolDefinition = {
  entry: underKeel,
  Component: UnderKeelComponent,
  SEOComponent: UnderKeelSEO,
  BibliographyComponent: UnderKeelBibliography,
};
