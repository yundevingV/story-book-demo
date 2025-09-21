import { deleteCSS } from "../../helper/deleteCSS";
import { initPage } from "../../helper/initPage";
import { waitFunction } from "../../helper/waitFunction";
import { test, expect } from "@playwright/test";

// tests/visual/card/example-card.spec.ts
test.describe("Example Card 시각적 테스트", () => {
  test.beforeEach(async ({ page }) => {
    await initPage(page);

    await page.goto("/iframe.html?id=card--example&viewMode=story");

    await waitFunction(page);

    await deleteCSS(page);
  });

  test("Example Card 시각적 테스트", async ({ page }) => {
    await expect(page).toHaveScreenshot("example-card.png");
  });
});
