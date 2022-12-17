import { afterEach, beforeAll, expect, test, SpyInstance, vi } from 'vitest';
import { Sample } from '../src/index.mjs';

let spy: SpyInstance;
let client = new Sample();

beforeAll(async () => {
  
  spy = vi
    .spyOn(client, 'mySqrt')
    .mockImplementation((_) => {
      return 42;
      });
});

test.only('it has success', () => {
  expect(client.mySqrt(4)).toBe(42);
  expect(spy).toHaveBeenCalledTimes(1);
});

test.only('it should has success but fails', () => {
  expect(client.mySqrt(4)).toBe(42);
  expect(spy).toHaveBeenCalledTimes(1);
});

afterEach(() => {
  vi.resetAllMocks();
});

