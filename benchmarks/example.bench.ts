import { bench, describe } from "vitest";

/**
 * Example benchmark: Fibonacci calculation
 */
function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Example benchmark: Array operations
 */
function arrayOperations(size: number): number[] {
  const arr = Array.from({ length: size }, (_, i) => i);
  return arr.map((x) => x * 2).filter((x) => x % 4 === 0);
}

describe("Math operations", () => {
  bench("fibonacci(10)", () => {
    fibonacci(10);
  });

  bench("fibonacci(20)", () => {
    fibonacci(20);
  });
});

describe("Array operations", () => {
  bench("small array (100 items)", () => {
    arrayOperations(100);
  });

  bench("medium array (1000 items)", () => {
    arrayOperations(1000);
  });

  bench("large array (10000 items)", () => {
    arrayOperations(10000);
  });
});
