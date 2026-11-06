import { helixAt } from '@lp-labs/helix-geometry';
if (Math.abs(helixAt(2, 2 * Math.PI, 0).curvature - 0.4) > 1e-10) throw new Error('Geometry');
// @ts-expect-error invalid argument must be rejected by declarations
helixAt('2', 1, 0);
