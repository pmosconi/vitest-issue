import { afterEach, beforeAll, expect, test, SpyInstance, vi } from 'vitest';
import { Sample } from '../src/index.mjs';

let spy: SpyInstance;
let client: Sample;

beforeAll(async () => {
  client = new Sample();
  spy = vi
    .spyOn(client, 'mySqrt')
    .mockImplementation((_) => {
      return 42;
      });
});

test('call mySqrt', () => {
  expect(client.mySqrt(4)).toBe(42);
  expect(spy).toHaveBeenCalledTimes(1);
});

test('call withFn', () => {
  expect(client.withFn(4)).toBe(42);
  expect(spy).toHaveBeenCalledTimes(1);
});

afterEach(() => {
  vi.resetAllMocks();
});