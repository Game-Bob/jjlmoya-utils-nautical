import type { NauticalToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import SpeedConverterCalculator from './component.astro';
import SpeedConverterSEO from './seo.astro';
import SpeedConverterBibliography from './bibliography.astro';

export interface SpeedConverterUI {
  [key: string]: string;
  labelKnots: string;
  labelKmh: string;
  labelMph: string;
  labelMs: string;
  labelBeaufort: string;
  tableTitle: string;
  tableForce: string;
  tableKnots: string;
  tableDesc: string;
  tableSeaState: string;
  btnConvert: string;
  btnReset: string;
}

export type SpeedConverterLocaleContent = ToolLocaleContent<SpeedConverterUI>;

export const speedConverter: NauticalToolEntry<SpeedConverterUI> = {
  id: 'speed-converter',
  icons: {
    bg: 'mdi:speedometer',
    fg: 'mdi:waves',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { SpeedConverterCalculator, SpeedConverterSEO, SpeedConverterBibliography };

export const SPEED_CONVERTER_TOOL: ToolDefinition = {
  entry: speedConverter,
  Component: SpeedConverterCalculator,
  SEOComponent: SpeedConverterSEO,
  BibliographyComponent: SpeedConverterBibliography,
};
