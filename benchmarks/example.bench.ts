import { bench, describe } from "vitest";

describe("String Operations", () => {
  bench("string concatenation", () => {
    let result = "";
    for (let i = 0; i < 100; i++) {
      result += "a";
    }
  });

  bench("array join", () => {
    const arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push("a");
    }
    arr.join("");
  });
});

describe("Array Operations", () => {
  bench("array push", () => {
    const arr = [];
    for (let i = 0; i < 1000; i++) {
      arr.push(i);
    }
  });

  bench("array spread", () => {
    let arr: number[] = [];
    for (let i = 0; i < 1000; i++) {
      arr = [...arr, i];
    }
  });
});
