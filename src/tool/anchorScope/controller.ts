import type { AnchorInputs, UnitSystem, RodeType, WindCondition, SeabedType } from './types';
import type { AnchorScopeUI } from './ui';
import { DEFAULT_INPUTS, FEET_TO_METERS, METERS_TO_FEET } from './constants';
import { computeAnchorCalculations } from './logic';
import { evaluateAnchorSecurity } from './evaluator';
import { loadAnchorInputs, saveAnchorInputs } from './storage';
import { getPresetInputs } from './presets';
import {
  updateMetricDisplay,
  updateStatusBanner,
  updateAdviceCards,
  renderVisualProfile,
} from './dom-views';

export class AnchorScopeController {
  private inputs: AnchorInputs;
  private ui: AnchorScopeUI;
  private root: HTMLElement;

  constructor(root: HTMLElement) {
    this.root = root;
    this.ui = this.parseUiData();
    this.inputs = loadAnchorInputs();
    this.initElements();
    this.attachEvents();
    this.recalculate();
  }

  private parseUiData(): AnchorScopeUI {
    try {
      const dataStr = this.root.getAttribute('data-i18n') ?? '{}';
      return JSON.parse(dataStr) as AnchorScopeUI;
    } catch {
      return {} as AnchorScopeUI;
    }
  }

  private initElements(): void {
    this.setInputValue('#sc-depth', this.getDisplayValue(this.inputs.waterDepth));
    this.setInputValue('#sc-bow', this.getDisplayValue(this.inputs.bowHeight));
    this.setInputValue('#sc-tide', this.getDisplayValue(this.inputs.tideRange));
    this.setInputValue('#sc-boat-length', this.getDisplayValue(this.inputs.boatLength));
    this.setCustomSelectValue('#sc-rode-type-select', this.inputs.rodeType);
    this.setCustomSelectValue('#sc-wind-select', this.inputs.windCondition);
    this.setCustomSelectValue('#sc-seabed-select', this.inputs.seabedType);
    this.updateUnitButtons();
  }

  private attachEvents(): void {
    this.root.querySelectorAll<HTMLInputElement>('.sc-num-input').forEach((input) => {
      input.addEventListener('input', () => this.handleNumericInput());
    });
    this.attachCustomSelectEvents();
    this.root.querySelectorAll<HTMLButtonElement>('.asc-preset-chip').forEach((chip) => {
      chip.addEventListener('click', () => this.applyPreset(chip.getAttribute('data-preset')));
    });
    this.root.querySelectorAll<HTMLButtonElement>('.asc-unit-btn, .sc-unit-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => this.handleUnitSwitch(e));
    });
    const resetBtn = this.root.querySelector<HTMLButtonElement>('#sc-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => this.handleReset());
    }
  }

  private applyPreset(preset: string | null): void {
    this.inputs = getPresetInputs(preset, this.inputs);
    this.updateActivePresetChip(preset);
    this.initElements();
    saveAnchorInputs(this.inputs);
    this.recalculate();
  }

  private updateActivePresetChip(preset: string | null): void {
    this.root.querySelectorAll<HTMLButtonElement>('.asc-preset-chip').forEach((chip) => {
      const isActive = chip.getAttribute('data-preset') === preset;
      chip.classList.toggle('asc-preset-active', isActive);
    });
  }

  private attachCustomSelectEvents(): void {
    this.root.querySelectorAll<HTMLElement>('.asc-custom-select').forEach((sel) => {
      const trigger = sel.querySelector<HTMLButtonElement>('.asc-select-trigger');
      trigger?.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleCustomSelect(sel);
      });
      sel.querySelectorAll<HTMLElement>('.asc-option').forEach((opt) => {
        opt.addEventListener('click', (e) => {
          e.stopPropagation();
          this.handleOptionSelect(sel, opt);
        });
      });
    });
    document.addEventListener('click', () => this.closeAllCustomSelects());
  }

  private toggleCustomSelect(sel: HTMLElement): void {
    const wasOpen = sel.classList.contains('asc-select-open');
    this.closeAllCustomSelects();
    if (!wasOpen) {
      sel.classList.add('asc-select-open');
    }
  }

  private closeAllCustomSelects(): void {
    this.root.querySelectorAll<HTMLElement>('.asc-custom-select').forEach((s) => {
      s.classList.remove('asc-select-open');
    });
  }

  private handleOptionSelect(sel: HTMLElement, opt: HTMLElement): void {
    const val = opt.getAttribute('data-val') ?? '';
    const id = sel.getAttribute('data-id') ?? '';
    this.setCustomSelectValue(`#${sel.id}`, val);
    sel.classList.remove('asc-select-open');
    this.applySelectValue(id, val);
  }

  private applySelectValue(id: string, val: string): void {
    if (id === 'sc-rode-type') {
      this.inputs.rodeType = val as RodeType;
    } else if (id === 'sc-wind') {
      this.inputs.windCondition = val as WindCondition;
    } else if (id === 'sc-seabed') {
      this.inputs.seabedType = val as SeabedType;
    }
    saveAnchorInputs(this.inputs);
    this.recalculate();
  }

  private handleNumericInput(): void {
    this.inputs.waterDepth = this.getStoredValue('#sc-depth');
    this.inputs.bowHeight = this.getStoredValue('#sc-bow');
    this.inputs.tideRange = this.getStoredValue('#sc-tide');
    this.inputs.boatLength = this.getStoredValue('#sc-boat-length');
    saveAnchorInputs(this.inputs);
    this.recalculate();
  }

  private handleUnitSwitch(e: Event): void {
    const target = e.currentTarget as HTMLButtonElement;
    const unit = target.getAttribute('data-unit') as UnitSystem;
    if (unit && unit !== this.inputs.unitSystem) {
      this.inputs.unitSystem = unit;
      this.updateUnitButtons();
      this.initElements();
      saveAnchorInputs(this.inputs);
      this.recalculate();
    }
  }

  private handleReset(): void {
    this.inputs = { ...DEFAULT_INPUTS };
    this.initElements();
    this.updateActivePresetChip('moderate');
    saveAnchorInputs(this.inputs);
    this.recalculate();
  }

  private recalculate(): void {
    const result = computeAnchorCalculations(this.inputs);
    const report = evaluateAnchorSecurity(this.inputs, result);
    const unitLabel = this.inputs.unitSystem === 'metric' ? this.ui.unitM : this.ui.unitFt;
    const mult = this.inputs.unitSystem === 'metric' ? 1 : METERS_TO_FEET;

    this.updateMetrics(result, unitLabel, mult);
    this.updateStatusAndAdvice(report, result);
    renderVisualProfile(this.root.querySelector<SVGSVGElement>('#sc-anchor-svg'), this.inputs, result);
  }

  private updateMetrics(result: ReturnType<typeof computeAnchorCalculations>, unit: string, mult: number): void {
    const format = (v: number) => (v * mult).toFixed(1);
    updateMetricDisplay(this.root.querySelector('#sc-scope-val'), `${result.effectiveScopeRatio}:1`);
    updateMetricDisplay(this.root.querySelector('#sc-total-depth-val'), format(result.totalDepth), unit);
    updateMetricDisplay(this.root.querySelector('#sc-rode-length-val'), format(result.rodeLength), unit);
    updateMetricDisplay(this.root.querySelector('#sc-swing-radius-val'), format(result.swingRadius), unit);
    updateMetricDisplay(this.root.querySelector('#sc-min-rode-val'), format(result.minRecommendedRode), unit);
    updateMetricDisplay(this.root.querySelector('#sc-storm-rode-val'), format(result.heavyWeatherRode), unit);
  }

  private updateStatusAndAdvice(report: ReturnType<typeof evaluateAnchorSecurity>, result: ReturnType<typeof computeAnchorCalculations>): void {
    updateStatusBanner(
      {
        badge: this.root.querySelector('#sc-status-badge'),
        title: this.root.querySelector('#sc-status-title'),
        desc: this.root.querySelector('#sc-status-desc'),
      },
      report,
      result,
      this.ui,
    );
    updateAdviceCards(
      this.root.querySelector('#sc-seabed-advice'),
      this.root.querySelector('#sc-catenary-advice'),
      report,
      this.ui,
    );
  }

  private getDisplayValue(meters: number): string {
    if (this.inputs.unitSystem === 'imperial') {
      return (meters * METERS_TO_FEET).toFixed(1);
    }
    return meters.toString();
  }

  private getStoredValue(selector: string): number {
    const el = this.root.querySelector<HTMLInputElement>(selector);
    const val = parseFloat(el?.value || '0');
    if (this.inputs.unitSystem === 'imperial') {
      return val * FEET_TO_METERS;
    }
    return val;
  }

  private setInputValue(selector: string, val: string): void {
    const el = this.root.querySelector<HTMLInputElement>(selector);
    if (el) {
      el.value = val;
    }
  }

  private setCustomSelectValue(selector: string, val: string): void {
    const sel = this.root.querySelector<HTMLElement>(selector);
    if (!sel) {
      return;
    }
    sel.setAttribute('data-value', val);
    const labelEl = sel.querySelector<HTMLElement>('.asc-select-label');
    sel.querySelectorAll<HTMLElement>('.asc-option').forEach((opt) => {
      const isSelected = opt.getAttribute('data-val') === val;
      opt.classList.toggle('asc-option-active', isSelected);
      if (isSelected && labelEl) {
        labelEl.textContent = opt.textContent;
      }
    });
  }

  private updateUnitButtons(): void {
    const unitLabel = this.inputs.unitSystem === 'metric' ? this.ui.unitM : this.ui.unitFt;
    this.root.querySelectorAll<HTMLButtonElement>('.asc-unit-btn, .sc-unit-btn').forEach((btn) => {
      const isActive = btn.getAttribute('data-unit') === this.inputs.unitSystem;
      btn.classList.toggle('asc-unit-active', isActive);
      btn.classList.toggle('sc-unit-active', isActive);
    });
    this.root.querySelectorAll<HTMLElement>('.asc-field-unit').forEach((el) => {
      el.textContent = unitLabel;
    });
  }
}
