import type { NauticalToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import TideCalculatorCalculator from './component.astro';
import TideCalculatorSEO from './seo.astro';
import TideCalculatorBibliography from './bibliography.astro';

export interface TideCalculatorUI {
  [key: string]: string;
  parametersLabel: string;
  highTideLabel: string;
  lowTideLabel: string;
  targetTimeLabel: string;
  estimatedHeightLabel: string;
  metersLabel: string;
  amplitudeLabel: string;
  durationLabel: string;
  tableBreakdownLabel: string;
  tableHourLabel: string;
  tableStateLabel: string;
  tableStartLabel: string;
  tableEndLabel: string;
  statusUpLabel: string;
  statusDownLabel: string;
  statusOutOfRange: string;
  faqTitle: string;
  bibliographyTitle: string;
}

export type TideCalculatorLocaleContent = ToolLocaleContent<TideCalculatorUI>;

export const tideCalculator: NauticalToolEntry<TideCalculatorUI> = {
  id: 'tide-calculator',
  icons: {
    bg: 'mdi:waves',
    fg: 'mdi:sailing',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { TideCalculatorCalculator, TideCalculatorSEO, TideCalculatorBibliography };

export const TIDE_CALCULATOR_TOOL: ToolDefinition = {
  entry: tideCalculator,
  Component: TideCalculatorCalculator,
  SEOComponent: TideCalculatorSEO,
  BibliographyComponent: TideCalculatorBibliography,
};
