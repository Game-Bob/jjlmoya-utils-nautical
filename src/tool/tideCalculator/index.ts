import type { NauticalToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import TideCalculatorCalculator from './component.astro';
import TideCalculatorSEO from './seo.astro';
import TideCalculatorBibliography from './bibliography.astro';

export interface TideCalculatorUI {
  [key: string]: string;
  parametros: string;
  pleamar: string;
  bajamar: string;
  horaConsulta: string;
  alturaEstimada: string;
  metros: string;
  amplitud: string;
  duracion: string;
  desglosePorDozavos: string;
  hora: string;
  estado: string;
  altura: string;
  subiendo: string;
  bajando: string;
  fueraDeRango: string;
  inicio: string;
  final: string;
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
