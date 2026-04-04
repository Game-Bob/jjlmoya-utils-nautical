import type { NauticalToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import SailAreaCalculator from './component.astro';
import SailAreaSEO from './seo.astro';
import SailAreaBibliography from './bibliography.astro';

export interface SailAreaUI {
  [key: string]: string;
  sailType: string;
  typTriangle: string;
  typQuad: string;
  typGenoa: string;
  labelBase: string;
  labelHeight: string;
  labelLP: string;
  labelJ: string;
  labelI: string;
  labelDisplacement: string;
  labelArea: string;
  labelRatio: string;
  btnCalculate: string;
  btnReset: string;
  resultArea: string;
  resultRatio: string;
}

export type SailAreaLocaleContent = ToolLocaleContent<SailAreaUI>;

export const sailArea: NauticalToolEntry<SailAreaUI> = {
  id: 'sail-area',
  icons: {
    bg: 'mdi:sail',
    fg: 'mdi:weather-windy',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { SailAreaCalculator, SailAreaSEO, SailAreaBibliography };

export const SAIL_AREA_TOOL: ToolDefinition = {
  entry: sailArea,
  Component: SailAreaCalculator,
  SEOComponent: SailAreaSEO,
  BibliographyComponent: SailAreaBibliography,
};
