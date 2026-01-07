import { bench, describe } from "vitest";

/**
 * Example benchmarks demonstrating CodSpeed integration
 */

// Simple mathematical operations
describe("mathematical operations", () => {
	bench("fibonacci recursive", () => {
		function fibonacci(n: number): number {
			if (n < 2) return n;
			return fibonacci(n - 1) + fibonacci(n - 2);
		}
		fibonacci(10);
	});

	bench("fibonacci iterative", () => {
		function fibonacci(n: number): number {
			if (n < 2) return n;
			let a = 0;
			let b = 1;
			for (let i = 2; i <= n; i++) {
				const temp = a + b;
				a = b;
				b = temp;
			}
			return b;
		}
		fibonacci(10);
	});
});

// Array operations
describe("array operations", () => {
	const data = Array.from({ length: 1000 }, (_, i) => i);

	bench("map and filter", () => {
		data.map((x) => x * 2).filter((x) => x % 4 === 0);
	});

	bench("reduce", () => {
		data.reduce((sum, x) => sum + x, 0);
	});

	bench("for loop", () => {
		let sum = 0;
		for (let i = 0; i < data.length; i++) {
			sum += data[i];
		}
		return sum;
	});
});

// String operations
describe("string operations", () => {
	const text = "hello world ".repeat(100);

	bench("string split", () => {
		text.split(" ");
	});

	bench("string replace", () => {
		text.replace(/world/g, "universe");
	});

	bench("string concatenation", () => {
		let result = "";
		for (let i = 0; i < 100; i++) {
			result += "test";
		}
		return result;
	});

	bench("array join", () => {
		Array.from({ length: 100 }, () => "test").join("");
	});
});
