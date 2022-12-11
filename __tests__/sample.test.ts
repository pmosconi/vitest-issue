import { assert, expect, test } from 'vitest';
import { mySqrt } from '../src/index.mjs';

test('index.mts should be included in coverage', () => {
  expect(mySqrt(4)).toBe(2);
});