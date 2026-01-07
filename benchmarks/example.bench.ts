import { bench, describe } from "vitest";

// Example benchmarks to demonstrate CodSpeed integration
// Replace these with your actual performance-critical code

function fibonacci(n: number): number {
	if (n < 2) return n;
	return fibonacci(n - 1) + fibonacci(n - 2);
}

function sortArray(arr: number[]): number[] {
	return [...arr].sort((a, b) => a - b);
}

describe("Mathematical Operations", () => {
	bench("fibonacci 10", () => {
		fibonacci(10);
	});

	bench("fibonacci 15", () => {
		fibonacci(15);
	});

	bench("fibonacci 20", () => {
		fibonacci(20);
	});
});

describe("Array Operations", () => {
	const smallArray = Array.from({ length: 100 }, () =>
		Math.floor(Math.random() * 1000),
	);
	const largeArray = Array.from({ length: 10000 }, () =>
		Math.floor(Math.random() * 1000),
	);

	bench("sort small array (100 items)", () => {
		sortArray(smallArray);
	});

	bench("sort large array (10000 items)", () => {
		sortArray(largeArray);
	});
});

describe("String Operations", () => {
	const testString = "Hello World ".repeat(100);

	bench("string concatenation", () => {
		let result = "";
		for (let i = 0; i < 100; i++) {
			result += "test";
		}
		return result;
	});

	bench("string template literals", () => {
		let result = "";
		for (let i = 0; i < 100; i++) {
			result = `${result}test`;
		}
		return result;
	});

	bench("string trim", () => {
		testString.trim();
	});

	bench("string split", () => {
		testString.split(" ");
	});
});
