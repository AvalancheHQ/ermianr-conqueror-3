import { bench, describe } from "vitest";
import { cn } from "../apps/web/src/lib/utils";

describe("cn utility", () => {
  bench("cn with single class", () => {
    cn("text-red-500");
  });

  bench("cn with multiple classes", () => {
    cn("text-red-500", "bg-blue-500", "p-4");
  });

  bench("cn with conditional classes", () => {
    cn("base-class", true && "active", false && "disabled");
  });

  bench("cn with object syntax", () => {
    cn({
      "text-red-500": true,
      "bg-blue-500": true,
      "p-4": false,
    });
  });

  bench("cn with mixed inputs", () => {
    cn(
      "base-class",
      {
        active: true,
        disabled: false,
      },
      ["array-class-1", "array-class-2"],
    );
  });
});
