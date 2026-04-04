import type { NauticalToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import SailAreaComponent from './component.astro';
import SailAreaSEO from './seo.astro';
import SailAreaBibliography from './bibliography.astro';

export interface SailAreaUI {
  [key: string]: string;
  hullSectionLabel: string;
  totalMassLabel: string;
  rigSystemLabel: string;
  intendedUseLabel: string;
  rigGeometryLabel: string;
  sailConfigLabel: string;
  genoaOverlapLabel: string;
  foqueLabel: string;
  genovaLabel: string;
  sadRatioLabel: string;
  totalAreaLabel: string;
  performanceLabel: string;
  sloopLabel: string;
  cutterLabel: string;
  ketchLabel: string;
  cruiserLabel: string;
  performanceTypeLabel: string;
  racerLabel: string;
  exportPdfLabel: string;
  faqTitle: string;
  bibliographyTitle: string;
}

export type SailAreaLocaleContent = ToolLocaleContent<SailAreaUI>;

export const sailArea: NauticalToolEntry<SailAreaUI> = {
  id: 'sail-area',
  icons: {
    bg: 'mdi:sail-boat',
    fg: 'mdi:wind-power',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { SailAreaComponent, SailAreaSEO, SailAreaBibliography };

export const SAIL_AREA_TOOL: ToolDefinition = {
  entry: sailArea,
  Component: SailAreaComponent,
  SEOComponent: SailAreaSEO,
  BibliographyComponent: SailAreaBibliography,
};
