export interface EnduranceParams {
  tank1: number;
  tank2: number;
  fuelCurrent: number;
  consumption: number;
  speed: number;
  seaFactor: number;
  reserve: number;
}

export interface EnduranceResult {
  maxDist: number;
  safeHours: number;
  safeDist: number;
  litresPerMile: number;
  fuelPct: number;
}

export function calculateEndurance(p: EnduranceParams): EnduranceResult {
  const { tank1, tank2, fuelCurrent, consumption, speed, seaFactor, reserve } = p;
  const realCons = consumption * seaFactor;
  const lpmn = speed > 0 ? realCons / speed : 0;
  const hTotal = realCons > 0 ? fuelCurrent / realCons : 0;
  const maxDist = hTotal * speed;
  const safeFuel = fuelCurrent * (1 - reserve / 100);
  const safeHours = realCons > 0 ? safeFuel / realCons : 0;
  const safeDist = safeHours * speed;
  const tCap = tank1 + tank2;
  const fuelPct = tCap > 0 ? (fuelCurrent / tCap) * 100 : 0;
  return { maxDist, safeHours, safeDist, litresPerMile: lpmn, fuelPct };
}

export function calculateFuelNeeded(dist: number, litresPerMile: number, reserve: number): number {
  const reserveFactor = 1 - reserve / 100;
  return reserveFactor > 0 ? (dist * litresPerMile) / reserveFactor : 0;
}
