import type { NauticalToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import EnduranceCalculator from './component.astro';
import EnduranceSEO from './seo.astro';
import EnduranceBibliography from './bibliography.astro';

export interface EnduranceUI {
  [key: string]: string;
  modeNormal: string;
  modeInverse: string;
  labelTank: string;
  labelConsumption: string;
  labelReserve: string;
  labelSpeed: string;
  labelDistance: string;
  labelUsableFuel: string;
  labelHours: string;
  labelMiles: string;
  labelRequiredFuel: string;
  btnCalculate: string;
  btnReset: string;
  resultHours: string;
  resultMiles: string;
}

export type EnduranceLocaleContent = ToolLocaleContent<EnduranceUI>;

export const endurance: NauticalToolEntry<EnduranceUI> = {
  id: 'endurance',
  icons: {
    bg: 'mdi:fuel',
    fg: 'mdi:sailboat',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { EnduranceCalculator, EnduranceSEO, EnduranceBibliography };

export const ENDURANCE_TOOL: ToolDefinition = {
  entry: endurance,
  Component: EnduranceCalculator,
  SEOComponent: EnduranceSEO,
  BibliographyComponent: EnduranceBibliography,
};
