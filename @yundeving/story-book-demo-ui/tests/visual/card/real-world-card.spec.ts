// tests/visual/card/real-world-card.spec.ts
import { deleteCSS } from "../../helper/deleteCSS";
import { initPage } from "../../helper/initPage";
import { waitFunction } from "../../helper/waitFunction";
import { test, expect } from "@playwright/test";

test.describe("Real World Card 시각적 테스트", () => {
  // before start test
  test.beforeEach(async ({ page }) => {
    await initPage(page);

    // Card 스토리가 존재하는지 확인하고 적절한 스토리로 이동
    await page.goto("/iframe.html?id=card--real-world-example&viewMode=story");

    await waitFunction(page);

    await deleteCSS(page);
  });

  test("Real World Card 시각적 테스트", async ({ page }) => {
    await expect(page).toHaveScreenshot("real-world-card.png");
  });
});
