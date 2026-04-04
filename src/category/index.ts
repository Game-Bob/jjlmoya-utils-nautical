import type { NauticalCategoryEntry, CategoryLocaleContent } from '../types';

export type { CategoryLocaleContent };

export const nauticalCategory: NauticalCategoryEntry = {
  icon: 'mdi:sail-boat',
  tools: [],
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};
