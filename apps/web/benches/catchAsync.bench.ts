import { bench, describe } from "vitest";
import { catchAsync } from "../src/lib/catchAsync";

describe("catchAsync utility", () => {
  bench("catchAsync with successful promise", async () => {
    await catchAsync(Promise.resolve({ data: "test" }));
  });

  bench("catchAsync with rejected promise", async () => {
    await catchAsync(Promise.reject(new Error("test error")));
  });

  bench("catchAsync with delayed resolution", async () => {
    await catchAsync(
      new Promise((resolve) => setTimeout(() => resolve("test"), 0)),
    );
  });

  bench("catchAsync with non-Error rejection", async () => {
    await catchAsync(Promise.reject("string error"));
  });
});
