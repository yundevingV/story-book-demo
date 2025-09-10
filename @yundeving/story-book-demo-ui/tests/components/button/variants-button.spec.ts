import { deleteCSS } from "../../helper/deleteCSS";
import { initPage } from "../../helper/initPage";
import { waitFunction } from "../../helper/waitFunction";
import { test, expect } from "@playwright/test";

const variants = [
  "default",
  "primary",
  "secondary",
  "accent",
  "info",
  "success",
  "warning",
  "error",
  "ghost",
];

// variant button test
test.describe("Variant Button Component", () => {
  test("모든 variant가 렌더링되어야 함", async ({ page }) => {
    await initPage(page);

    await page.goto("/iframe.html?id=button--variant-button-list");

    await waitFunction(page);

    await deleteCSS(page);

    for (const variant of variants) {
      await expect(page.locator(`button:has-text('${variant}')`)).toBeVisible();
    }
  });
});
