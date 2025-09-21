import { deleteCSS } from "../../helper/deleteCSS";
import { initPage } from "../../helper/initPage";
import { waitFunction } from "../../helper/waitFunction";
import { test, expect } from "@playwright/test";

// tests/accessibility/card/different-size-card.spec.ts
test.describe("Different Size Card 시각적 테스트", () => {
  test.beforeEach(async ({ page }) => {
    await initPage(page);

    await page.goto("/iframe.html?id=card--different-size&viewMode=story");

    await waitFunction(page);

    await deleteCSS(page);
  });

  test("Different Size Card 시각적 테스트", async ({ page }) => {
    await expect(page).toHaveScreenshot("different-size-card.png");
  });
});
