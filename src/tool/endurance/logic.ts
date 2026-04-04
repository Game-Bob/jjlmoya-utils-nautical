export function calcUsableFuel(tank: number, reservePct: number): number {
  const reserve = tank * (reservePct / 100);
  return Math.max(0, tank - reserve);
}

export function calcEnduranceHours(usableFuel: number, consumptionRate: number): number {
  if (consumptionRate <= 0) return 0;
  return usableFuel / consumptionRate;
}

export function calcEnduranceMiles(hours: number, speedKnots: number): number {
  return hours * speedKnots;
}

export function calcRequiredFuel(
  distanceNm: number,
  speedKnots: number,
  consumptionRate: number,
  reservePct: number,
): number {
  if (speedKnots <= 0) return 0;
  const hours = distanceNm / speedKnots;
  const fuelNeeded = hours * consumptionRate;
  const totalWithReserve = fuelNeeded / (1 - reservePct / 100);
  return totalWithReserve;
}
