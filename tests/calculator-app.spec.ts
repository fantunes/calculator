import { test, expect, type Page } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3001/");
});

test.describe("Calculate", () => {
  test("should have the buttons numbered 0 to 9", async ({ page }) => {
    for (let index = 0; index < 10; index++) {
      await expect(
        page.getByRole("button", { name: index.toString() })
      ).toBeVisible();
    }
  });

  test("should change display value when number buttons are clicked", async ({
    page,
  }) => {
    for (let index = 0; index < 10; index++) {
      await page.getByRole("button", { name: index.toString() }).click();
    }

    const input = page.locator("input[type=number]");

    await expect(input).toHaveValue("123456789");
  });

  test("should display correct value for addition operation", async ({
    page,
  }) => {
    await page.getByRole("button", { name: "5" }).click();
    await page.getByRole("button", { name: "+" }).click();
    await page.getByRole("button", { name: "3" }).click();
    await page.getByRole("button", { name: "=" }).click();

    const input = page.locator("input[type=number]");

    await expect(input).toHaveValue("8");
  });

  test("should display correct value for subtraction operation", async ({
    page,
  }) => {
    await page.getByRole("button", { name: "5" }).click();
    await page.getByRole("button", { name: "-" }).click();
    await page.getByRole("button", { name: "3" }).click();
    await page.getByRole("button", { name: "=" }).click();

    const input = page.locator("input[type=number]");

    await expect(input).toHaveValue("2");
  });

  test("should display correct value for multiplication operation", async ({
    page,
  }) => {
    await page.getByRole("button", { name: "5" }).click();
    await page.getByRole("button", { name: "*" }).click();
    await page.getByRole("button", { name: "3" }).click();
    await page.getByRole("button", { name: "=" }).click();

    const input = page.locator("input[type=number]");

    await expect(input).toHaveValue("15");
  });

  test("should display correct value for division operation", async ({
    page,
  }) => {
    await page.getByRole("button", { name: "5" }).click();
    await page.getByRole("button", { name: "/" }).click();
    await page.getByRole("button", { name: "2" }).click();
    await page.getByRole("button", { name: "=" }).click();

    const input = page.locator("input[type=number]");

    await expect(input).toHaveValue("2.5");
  });
});
