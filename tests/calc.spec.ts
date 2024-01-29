import { calc } from "@/utils/calc";
import { test, expect } from "@playwright/test";

test.describe("should make calculations", () => {
  test("can add numbers", () => {
    const amount = calc(5, 3, "addition");

    expect(amount).toBe(8);
  });

  test("can subtract numbers", () => {
    const amount = calc(5, 3, "subtraction");

    expect(amount).toBe(2);
  });

  test("can multiply numbers", () => {
    const amount = calc(5, 3, "multiplication");

    expect(amount).toBe(15);
  });

  test("can divide numbers", () => {
    const amount = calc(5, 2.5, "division");

    expect(amount).toBe(2);
  });
});
