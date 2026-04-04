import type { NauticalCategoryEntry } from '../types';
import { tideCalculator } from '../tool/tideCalculator';
import { underKeel } from '../tool/underKeel';
import { nauticalConverter } from '../tool/nauticalConverter';
import { sailArea } from '../tool/sailArea';
import { speedConverter } from '../tool/speedConverter';
import { endurance } from '../tool/endurance';

export const nauticalCategory: NauticalCategoryEntry = {
  icon: 'mdi:sailing',
  tools: [tideCalculator, underKeel, nauticalConverter, sailArea, speedConverter, endurance],
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};
