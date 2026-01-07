import { bench, describe } from "vitest";
import { catchAsync } from "../apps/web/src/lib/catchAsync";

describe("catchAsync utility", () => {
  bench("catchAsync with successful promise", async () => {
    await catchAsync(Promise.resolve("success"));
  });

  bench("catchAsync with rejected promise", async () => {
    await catchAsync(Promise.reject(new Error("error")));
  });

  bench("catchAsync with delayed resolution", async () => {
    await catchAsync(
      new Promise((resolve) => setTimeout(() => resolve("delayed"), 0)),
    );
  });
});
