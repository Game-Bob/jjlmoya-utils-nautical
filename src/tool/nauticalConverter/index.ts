import type { NauticalToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import NauticalConverterComponent from './component.astro';
import NauticalConverterSEO from './seo.astro';
import NauticalConverterBibliography from './bibliography.astro';

export interface NauticalConverterUI {
  [key: string]: string;
  distanceCategoryLabel: string;
  speedCategoryLabel: string;
  depthCategoryLabel: string;
  pressureCategoryLabel: string;
  nmLabel: string;
  kmLabel: string;
  miLabel: string;
  cableLabel: string;
  knLabel: string;
  kmhLabel: string;
  msLabel: string;
  mphLabel: string;
  brozaLabel: string;
  mLabel: string;
  ftLabel: string;
  mbarLabel: string;
  mmhgLabel: string;
  inhgLabel: string;
  atmLabel: string;
  windSeaLabel: string;
  forceLabel: string;
  effectLabel: string;
  copyLabel: string;
  faqTitle: string;
  bibliographyTitle: string;
}

export type NauticalConverterLocaleContent = ToolLocaleContent<NauticalConverterUI>;

export const nauticalConverter: NauticalToolEntry<NauticalConverterUI> = {
  id: 'nautical-converter',
  icons: {
    bg: 'mdi:swap-horizontal',
    fg: 'mdi:compass',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { NauticalConverterComponent, NauticalConverterSEO, NauticalConverterBibliography };

export const NAUTICAL_CONVERTER_TOOL: ToolDefinition = {
  entry: nauticalConverter,
  Component: NauticalConverterComponent,
  SEOComponent: NauticalConverterSEO,
  BibliographyComponent: NauticalConverterBibliography,
};
