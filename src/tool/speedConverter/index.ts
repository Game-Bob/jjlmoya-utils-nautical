import type { NauticalToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import SpeedConverterComponent from './component.astro';
import SpeedConverterSEO from './seo.astro';
import SpeedConverterBibliography from './bibliography.astro';

export interface SpeedConverterUI {
  [key: string]: string;
  knLabel: string;
  kmhLabel: string;
  msLabel: string;
  mphLabel: string;
  beaufortTitle: string;
  forceLabel: string;
  descriptionLabel: string;
  knotsLabel: string;
  effectLabel: string;
  seaStateLabel: string;
  windEffectLabel: string;
  faqTitle: string;
  bibliographyTitle: string;
  beaufortDataJson: string;
}

export type SpeedConverterLocaleContent = ToolLocaleContent<SpeedConverterUI>;

export const speedConverter: NauticalToolEntry<SpeedConverterUI> = {
  id: 'speed-converter',
  icons: {
    bg: 'mdi:speedometer',
    fg: 'mdi:weather-windy',
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

export { SpeedConverterComponent, SpeedConverterSEO, SpeedConverterBibliography };

export const SPEED_CONVERTER_TOOL: ToolDefinition = {
  entry: speedConverter,
  Component: SpeedConverterComponent,
  SEOComponent: SpeedConverterSEO,
  BibliographyComponent: SpeedConverterBibliography,
};
