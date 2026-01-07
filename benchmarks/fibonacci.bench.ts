import { bench, describe } from "vitest";

function fibonacci(n: number): number {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

describe("fibonacci", () => {
  bench("fibonacci 10", () => fibonacci(10));
  bench("fibonacci 15", () => fibonacci(15));
  bench("fibonacci 20", () => fibonacci(20));
});
