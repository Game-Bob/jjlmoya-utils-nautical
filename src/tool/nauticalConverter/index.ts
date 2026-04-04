import type { NauticalToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import NauticalConverterCalculator from './component.astro';
import NauticalConverterSEO from './seo.astro';
import NauticalConverterBibliography from './bibliography.astro';

export interface NauticalConverterUI {
  [key: string]: string;
  tabDistance: string;
  tabSpeed: string;
  tabDepth: string;
  tabPressure: string;
  labelValue: string;
  labelFrom: string;
  labelTo: string;
  labelResult: string;
  beaufortTitle: string;
  beaufortForce: string;
  beaufortSpeed: string;
  beaufortDesc: string;
  btnCopy: string;
  copied: string;
}

export type NauticalConverterLocaleContent = ToolLocaleContent<NauticalConverterUI>;

export const nauticalConverter: NauticalToolEntry<NauticalConverterUI> = {
  id: 'nautical-converter',
  icons: {
    bg: 'mdi:compass-rose',
    fg: 'mdi:ship-wheel',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { NauticalConverterCalculator, NauticalConverterSEO, NauticalConverterBibliography };

export const NAUTICAL_CONVERTER_TOOL: ToolDefinition = {
  entry: nauticalConverter,
  Component: NauticalConverterCalculator,
  SEOComponent: NauticalConverterSEO,
  BibliographyComponent: NauticalConverterBibliography,
};
