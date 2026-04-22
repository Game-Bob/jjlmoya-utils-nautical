import type { NauticalToolEntry, ToolLocaleContent } from '../../types';

export interface NauticalConverterUI {
  [key: string]: string;
  distanceCategoryLabel: string;
  speedCategoryLabel: string;
  depthCategoryLabel: string;
  pressureCategoryLabel: string;
  nmLabel: string;
  kmLabel: string;
  miLabel: string;
  cableLabel: string;
  knLabel: string;
  kmhLabel: string;
  msLabel: string;
  mphLabel: string;
  brozaLabel: string;
  mLabel: string;
  ftLabel: string;
  mbarLabel: string;
  mmhgLabel: string;
  inhgLabel: string;
  atmLabel: string;
  windSeaLabel: string;
  forceLabel: string;
  effectLabel: string;
  copyLabel: string;
  faqTitle: string;
  bibliographyTitle: string;
}

export type NauticalConverterLocaleContent = ToolLocaleContent<NauticalConverterUI>;

export const nauticalConverter: NauticalToolEntry<NauticalConverterUI> = {
  id: 'nautical-converter',
  icons: {
    bg: 'mdi:swap-horizontal',
    fg: 'mdi:compass',
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

export { bibliography } from './bibliography';
