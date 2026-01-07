import { bench, describe } from "vitest";
import { cn } from "../src/lib/utils";

describe("cn utility function", () => {
  bench("cn with single class", () => {
    cn("text-red-500");
  });

  bench("cn with multiple classes", () => {
    cn("text-red-500", "bg-blue-500", "p-4");
  });

  bench("cn with conditional classes", () => {
    cn("text-red-500", false && "hidden", "bg-blue-500");
  });

  bench("cn with conflicting classes", () => {
    cn("p-4", "px-2", "py-2");
  });

  bench("cn with arrays", () => {
    cn(["text-red-500", "bg-blue-500"], "p-4");
  });

  bench("cn with objects", () => {
    cn({
      "text-red-500": true,
      "bg-blue-500": false,
      "p-4": true,
    });
  });
});
