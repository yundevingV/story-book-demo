//header-only-card.spec.ts
import { deleteCSS } from "../../helper/deleteCSS";
import { initPage } from "../../helper/initPage";
import { waitFunction } from "../../helper/waitFunction";
import { test, expect } from "@playwright/test";

// tests/accessibility/card/header-only-card.spec.ts
test.describe("Header Only Card 시각적 테스트", () => {
  test.beforeEach(async ({ page }) => {
    await initPage(page);

    await page.goto("/iframe.html?id=card--header-only&viewMode=story");

    await waitFunction(page);

    await deleteCSS(page);
  });

  test("Header Only Card 시각적 테스트", async ({ page }) => {
    await expect(page).toHaveScreenshot("header-only-card.png");
  });
});
