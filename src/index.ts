function finite(value: number, min = -Number.MAX_VALUE, max = Number.MAX_VALUE): number {
  if (typeof value !== 'number' || !Number.isFinite(value))
    throw new TypeError('Expected finite number');
  if (value < min || value > max) throw new RangeError('Number outside supported bounds');
  return value;
}
function length(v: number): void {
  finite(v, 1e-9, 1e9);
}
export function helixAt(
  radius: number,
  pitch: number,
  t: number,
): { x: number; y: number; z: number; curvature: number; torsion: number } {
  length(radius);
  finite(pitch, -1e9, 1e9);
  finite(t, -1e6, 1e6);
  const b = pitch / (2 * Math.PI),
    den = radius * radius + b * b;
  return {
    x: radius * Math.cos(t),
    y: radius * Math.sin(t),
    z: b * t,
    curvature: radius / den,
    torsion: b / den,
  };
}
export function helixLength(radius: number, pitch: number, turns: number): number {
  length(radius);
  finite(pitch, -1e9, 1e9);
  finite(turns, 0, 1e6);
  return Math.hypot(2 * Math.PI * radius, pitch) * turns;
}
