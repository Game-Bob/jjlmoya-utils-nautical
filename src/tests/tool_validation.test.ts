import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';

const TOOL_ID_REGEX = /^[a-z0-9]+-?[a-z0-9]*$/;

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have 1 tool in ALL_TOOLS', () => {
      expect(ALL_TOOLS.length).toBe(1);
    });
  });

  describe('Tool ID Format', () => {
    it('all tool IDs should match the required regex', () => {
      for (const tool of ALL_TOOLS) {
        expect(tool.entry.id).toMatch(TOOL_ID_REGEX);
      }
    });

    it('all tool IDs should be unique', () => {
      const ids = ALL_TOOLS.map((t) => t.entry.id);
      expect(new Set(ids).size).toBe(ids.length);
    });
  });

  describe('Tool Icons', () => {
    it('all tools should have bg and fg icons', () => {
      for (const tool of ALL_TOOLS) {
        expect(tool.entry.icons.bg).toBeTruthy();
        expect(tool.entry.icons.fg).toBeTruthy();
      }
    });
  });

  describe('Tool i18n', () => {
    it('all tools should have es and en locales', () => {
      for (const tool of ALL_TOOLS) {
        expect(tool.entry.i18n.es).toBeDefined();
        expect(tool.entry.i18n.en).toBeDefined();
      }
    });

    it('all tools should have Component, SEOComponent, BibliographyComponent', () => {
      for (const tool of ALL_TOOLS) {
        expect(tool.Component).toBeDefined();
        expect(tool.SEOComponent).toBeDefined();
        expect(tool.BibliographyComponent).toBeDefined();
      }
    });
  });
});
