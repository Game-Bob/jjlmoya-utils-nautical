export function triangleSailArea(base: number, height: number): number {
  return (base * height) / 2;
}

export function quadSailArea(base: number, height: number, clew: number = 0): number {
  const avgBase = (base + clew) / 2;
  return avgBase * height;
}

export function genoaArea(J: number, I: number, LP: number): number {
  return (LP * Math.sqrt(J * J + I * I)) / 2;
}

export function sailAreaRatio(totalArea: number, displacement: number): number {
  if (displacement <= 0) return 0;
  return totalArea / Math.pow(displacement, 2 / 3);
}
