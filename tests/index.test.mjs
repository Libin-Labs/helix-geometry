import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('analytic fixture', () => {
  assert.ok(Math.abs(api.helixAt(2, 2 * Math.PI, 0).curvature - 0.4) < 1e-10);
});
test('initial point', () => {
  const p = api.helixAt(2, 1, 0);
  assert.equal(p.x, 2);
  assert.equal(p.y, 0);
  assert.equal(p.z, 0);
});
test('full turn rise', () => {
  assert.ok(Math.abs(api.helixAt(2, 3, 2 * Math.PI).z - 3) < 1e-14);
});
test('length circle special case', () => {
  assert.equal(api.helixLength(2, 0, 3), 12 * Math.PI);
});
test('invalid radius and turns', () => {
  assert.throws(() => api.helixAt(0, 1, 1));
  assert.throws(() => api.helixLength(1, 1, -1));
});
test('type contract', () => {
  assert.throws(() => api.helixAt('2', 1, 0));
});
