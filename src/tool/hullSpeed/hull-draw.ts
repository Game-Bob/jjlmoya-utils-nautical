import type { HullKind } from './logic';

interface Frame {
  s: number;
  b: number;
  w: number;
  L: number;
  kind: HullKind;
}

export interface BoatDraw {
  stern: number;
  bow: number;
  wl: number;
  lift: number;
  kind: HullKind;
}

function frameOf(draw: BoatDraw): Frame {
  return {
    s: draw.stern,
    b: draw.bow,
    w: draw.wl + draw.lift,
    L: draw.bow - draw.stern,
    kind: draw.kind,
  };
}

function fb(kind: HullKind, length: number): number {
  if (kind === 'planing') return 54 + length * 0.03;
  if (kind === 'semi') return 62 + length * 0.035;
  return 74 + length * 0.045;
}

function sheer(frame: Frame): { ds: number; db: number; ox: number; oy: number } {
  if (frame.kind === 'planing') {
    return {
      ds: frame.w - 50,
      db: frame.w - 58,
      ox: Math.min(18, frame.L * 0.04),
      oy: 12,
    };
  }
  const rise = fb(frame.kind, frame.L);
  return {
    ds: frame.w - rise * 0.78,
    db: frame.w - rise * 1.22,
    ox: Math.min(24, frame.L * 0.05),
    oy: 16,
  };
}

function deckPlane(frame: Frame): string {
  const { ds, db, ox, oy } = sheer(frame);
  return `M ${frame.s} ${ds} L ${frame.b} ${db} L ${frame.b + ox} ${db - oy} L ${frame.s + ox} ${ds - oy} Z`;
}

function topsides(frame: Frame): string {
  const { ds, db } = sheer(frame);
  if (frame.kind === 'planing') {
    const aft = frame.s - 18;
    return `M ${frame.s} ${frame.w} L ${aft} ${ds} L ${frame.b - 8} ${db} L ${frame.b + 6} ${frame.w - 6} L ${frame.b} ${frame.w} Z`;
  }
  const stem = frame.kind === 'displacement' ? 18 : 9;
  return `M ${frame.s} ${frame.w} L ${frame.s - 10} ${ds} L ${frame.b} ${db} L ${frame.b + stem} ${frame.w - 10} L ${frame.b} ${frame.w} Z`;
}

function gunwale(frame: Frame): string {
  const { ds, db } = sheer(frame);
  return `M ${frame.s} ${ds} L ${frame.b} ${db} L ${frame.b} ${db + 7} L ${frame.s} ${ds + 7} Z`;
}

function transom(frame: Frame): string {
  const { ds, ox, oy } = sheer(frame);
  if (frame.kind === 'planing') {
    const aft = frame.s - 18;
    return `M ${frame.s} ${frame.w} L ${aft} ${ds} L ${aft + ox} ${ds - oy} L ${frame.s + ox} ${frame.w - 4} Z`;
  }
  return `M ${frame.s} ${frame.w} L ${frame.s} ${ds} L ${frame.s + ox} ${ds - oy} L ${frame.s + ox} ${frame.w - 8} Z`;
}

function underbody(frame: Frame): string {
  const s = frame.s;
  const L = frame.L;
  const w = frame.w;
  if (frame.kind === 'planing') {
    return `M ${s} ${w} L ${s + L * 0.18} ${w + 10} L ${s + L * 0.72} ${w + 11} L ${s + L * 0.92} ${w + 6} L ${frame.b} ${w} Z`;
  }
  return `M ${s} ${w} C ${s + L * 0.14} ${w + 32} ${s + L * 0.38} ${w + 48} ${s + L * 0.52} ${w + 46} C ${s + L * 0.72} ${w + 40} ${s + L * 0.9} ${w + 24} ${frame.b} ${w} Z`;
}

function keelPath(frame: Frame): string {
  const s = frame.s;
  const L = frame.L;
  const w = frame.w;
  if (frame.kind === 'planing') {
    return `M ${s + L * 0.16} ${w} L ${s + L * 0.6} ${w} L ${s + L * 0.4} ${w + 22} Z`;
  }
  if (frame.kind === 'semi') {
    return `M ${s + L * 0.22} ${w} L ${s + L * 0.7} ${w} L ${s + L * 0.5} ${w + 52} L ${s + L * 0.32} ${w + 46} Z`;
  }
  return `M ${s + L * 0.18} ${w} L ${s + L * 0.66} ${w} L ${s + L * 0.54} ${w + 78} L ${s + L * 0.28} ${w + 70} Z`;
}

function cabinPath(frame: Frame): string {
  const { ds } = sheer(frame);
  if (frame.kind === 'planing') return planingCockpit(frame, ds);
  const x0 = frame.s + frame.L * 0.27;
  const x1 = frame.s + frame.L * 0.6;
  return `<path class="n-hull-cabin" d="M ${x0} ${ds} L ${x0 + 10} ${ds - 46} L ${x1 - 4} ${ds - 44} L ${x1 + 12} ${ds} Z" />`;
}

function planingCockpit(frame: Frame, ds: number): string {
  const x0 = frame.s + frame.L * 0.22;
  const x1 = frame.s + frame.L * 0.48;
  const x2 = frame.s + frame.L * 0.7;
  const screen = `M ${x1} ${ds} L ${x1 + 10} ${ds - 32} L ${x2} ${ds - 30} L ${x2 + 8} ${ds} Z`;
  const console = `M ${x0} ${ds} L ${x0} ${ds - 16} L ${x1 - 4} ${ds - 16} L ${x1 - 4} ${ds} Z`;
  return `<path class="n-hull-cabin" d="${console}" /><path class="n-hull-glass" d="${screen}" />`;
}

function ports(frame: Frame): string {
  if (frame.kind === 'planing') return '';
  const { ds } = sheer(frame);
  const y = ds - 22;
  const x1 = frame.s + frame.L * 0.36;
  const x2 = frame.s + frame.L * 0.48;
  return `<circle class="n-hull-glass" cx="${x1.toFixed(1)}" cy="${y.toFixed(1)}" r="5" /><circle class="n-hull-glass" cx="${x2.toFixed(1)}" cy="${y.toFixed(1)}" r="5" />`;
}

function rig(frame: Frame): string {
  if (frame.kind === 'planing') return '';
  const { ds } = sheer(frame);
  const x = frame.s + frame.L * 0.42;
  const boom = frame.L * 0.28;
  return `<path class="n-hull-spar" d="M ${x} ${ds - 44} L ${x} ${ds - 168}" /><path class="n-hull-spar" d="M ${x} ${ds - 70} L ${x + boom} ${ds - 58}" />`;
}

function rudder(frame: Frame): string {
  const s = frame.s;
  const w = frame.w;
  return `M ${s + 7} ${w} L ${s - 6} ${w + 40} L ${s + 12} ${w + 40} L ${s + 16} ${w} Z`;
}

function drive(frame: Frame): string {
  if (frame.kind === 'planing') return outboard(frame);
  return `<path class="n-hull-keel" d="${rudder(frame)}" />`;
}

function outboard(frame: Frame): string {
  const { ds } = sheer(frame);
  const x = frame.s - 14;
  const cowling = `M ${x - 7} ${ds - 4} L ${x + 9} ${ds - 4} L ${x + 8} ${ds + 18} L ${x - 6} ${ds + 18} Z`;
  const shaft = `M ${x} ${ds + 18} L ${x} ${frame.w + 28}`;
  const foot = `M ${x - 5} ${frame.w + 24} L ${x + 14} ${frame.w + 26} L ${x + 12} ${frame.w + 34} L ${x - 4} ${frame.w + 32} Z`;
  return `<path class="n-hull-keel" d="${cowling}" /><path class="n-hull-spar" d="${shaft}" /><path class="n-hull-keel" d="${foot}" />`;
}

function chine(frame: Frame): string {
  if (frame.kind !== 'planing') return '';
  const y = frame.w - 16;
  return `<path class="n-hull-chine" d="M ${frame.s + 6} ${y} L ${frame.b - 10} ${y - 8}" />`;
}

function boot(frame: Frame): string {
  return `M ${frame.s} ${frame.w - 4} L ${frame.b} ${frame.w - 4} L ${frame.b} ${frame.w + 5} L ${frame.s} ${frame.w + 5} Z`;
}

export function boatMarkup(draw: BoatDraw): string {
  const frame = frameOf(draw);
  return [
    `<path class="n-hull-keel" d="${keelPath(frame)}" />`,
    drive(frame),
    `<path class="n-hull-body" d="${underbody(frame)}" />`,
    `<path class="n-hull-topside" d="${topsides(frame)}" />`,
    `<path class="n-hull-transom" d="${transom(frame)}" />`,
    `<path class="n-hull-deck" d="${deckPlane(frame)}" />`,
    `<path class="n-hull-gunwale" d="${gunwale(frame)}" />`,
    `<path class="n-hull-bootfill" d="${boot(frame)}" />`,
    chine(frame),
    cabinPath(frame),
    ports(frame),
    rig(frame),
  ].join('');
}
