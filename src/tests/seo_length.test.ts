import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';

describe('SEO Content Length Validation', () => {
  describe('Tool SEO', () => {
    ALL_TOOLS.forEach(({ entry }) => {
      describe(`Tool: ${entry.id}`, () => {
        const locales = Object.keys(entry.i18n) as string[];

        locales.forEach((locale) => {
          it(`${locale}: SEO sections should exist and be non-empty`, async () => {
            const loader = entry.i18n[locale as keyof typeof entry.i18n];
            if (!loader) return;
            const content = await loader();
            expect(Array.isArray(content.seo)).toBe(true);
            expect(content.seo.length).toBeGreaterThan(0);
          });

          it(`${locale}: slug should be defined and non-empty`, async () => {
            const loader = entry.i18n[locale as keyof typeof entry.i18n];
            if (!loader) return;
            const content = await loader();
            expect(content.slug).toBeTruthy();
          });
        });
      });
    });
  });
});
