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

export { EnduranceComponent, EnduranceSEO, EnduranceBibliography };

export const ENDURANCE_TOOL: ToolDefinition = {
  entry: endurance,
  Component: EnduranceComponent,
  SEOComponent: EnduranceSEO,
  BibliographyComponent: EnduranceBibliography,
};
