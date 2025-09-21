// tests/visual/card/theme-variants.card.spec.ts
import { deleteCSS } from "../../helper/deleteCSS";
import { initPage } from "../../helper/initPage";
import { waitFunction } from "../../helper/waitFunction";
import { test, expect } from "@playwright/test";

// tests/visual/card/theme-variants.card.spec.ts
test.describe("Theme Variants Card 시각적 테스트", () => {
  test.beforeEach(async ({ page }) => {
    await initPage(page);

    await page.goto("/iframe.html?id=card--theme-variants&viewMode=story");

    await waitFunction(page);

    await deleteCSS(page);
  });

  test("Theme Variants Card 시각적 테스트", async ({ page }) => {
    await expect(page).toHaveScreenshot("theme-variants-card.png");
  });
});
