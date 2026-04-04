import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';

describe('FAQ Content Validation', () => {
  ALL_TOOLS.forEach(({ entry }) => {
    describe(`Tool: ${entry.id}`, () => {
      const locales = Object.keys(entry.i18n) as string[];

      locales.forEach((locale) => {
        it(`${locale}: should have at least 3 FAQ items`, async () => {
          const loader = entry.i18n[locale as keyof typeof entry.i18n];
          if (!loader) return;
          const content = await loader();
          expect(Array.isArray(content.faq)).toBe(true);
          expect(content.faq.length).toBeGreaterThanOrEqual(3);
        });

        it(`${locale}: each FAQ item should have question and answer`, async () => {
          const loader = entry.i18n[locale as keyof typeof entry.i18n];
          if (!loader) return;
          const content = await loader();
          for (const item of content.faq) {
            expect(item.question).toBeTruthy();
            expect(item.answer).toBeTruthy();
          }
        });
      });
    });
  });
});
