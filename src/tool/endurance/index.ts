import type { NauticalToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import EnduranceComponent from './component.astro';
import EnduranceSEO from './seo.astro';
import EnduranceBibliography from './bibliography.astro';

export interface EnduranceUI {
  [key: string]: string;
  tankCapacityLabel: string;
  mainTankLabel: string;
  auxTankLabel: string;
  currentFuelLabel: string;
  seaConditionsLabel: string;
  consumptionLabel: string;
  cruiseSpeedLabel: string;
  reserveLabel: string;
  fuelPriceLabel: string;
  maxRangeLabel: string;
  realPerformanceLabel: string;
  hoursLabel: string;
  safeMilesLabel: string;
  tankValueLabel: string;
  inverseCalcLabel: string;
  desiredDistLabel: string;
  minFuelLabel: string;
  warningLabel: string;
  seaCalm: string;
  seaLight: string;
  seaModerate: string;
  seaStorm: string;
  faqTitle: string;
  bibliographyTitle: string;
}

export type EnduranceLocaleContent = ToolLocaleContent<EnduranceUI>;

export const endurance: NauticalToolEntry<EnduranceUI> = {
  id: 'endurance',
  icons: {
    bg: 'mdi:fuel',
    fg: 'mdi:map-marker-distance',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { EnduranceComponent, EnduranceSEO, EnduranceBibliography };

export const ENDURANCE_TOOL: ToolDefinition = {
  entry: endurance,
  Component: EnduranceComponent,
  SEOComponent: EnduranceSEO,
  BibliographyComponent: EnduranceBibliography,
};
