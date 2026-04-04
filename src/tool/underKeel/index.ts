import type { NauticalToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import UnderKeelCalculator from './component.astro';
import UnderKeelSEO from './seo.astro';
import UnderKeelBibliography from './bibliography.astro';

export interface UnderKeelUI {
  [key: string]: string;
  vasoDeBajo: string;
  caladoDelBarco: string;
  sondaDeLaCarta: string;
  resguardoSeguridad: string;
  pleamar: string;
  bajamar: string;
  ventanaDePaso: string;
  necesario: string;
  mareaReq: string;
  nuncaHayCalado: string;
  pasoLibreTodoCiclo: string;
  desdeHora: string;
  hastaHora: string;
  fondo: string;
}

export type UnderKeelLocaleContent = ToolLocaleContent<UnderKeelUI>;

export const underKeel: NauticalToolEntry<UnderKeelUI> = {
  id: 'under-keel',
  icons: {
    bg: 'mdi:anchor',
    fg: 'mdi:ship-wheel',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { UnderKeelCalculator, UnderKeelSEO, UnderKeelBibliography };

export const UNDER_KEEL_TOOL: ToolDefinition = {
  entry: underKeel,
  Component: UnderKeelCalculator,
  SEOComponent: UnderKeelSEO,
  BibliographyComponent: UnderKeelBibliography,
};
