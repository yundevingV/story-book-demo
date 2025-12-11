// tests/visual/Typography/typography-visual.spec.ts
import { deleteCSS } from "../../helper/deleteCSS";
import { initPage } from "../../helper/initPage";
import { waitFunction } from "../../helper/waitFunction";
import { expect, test } from "@playwright/test";

const storyId = "typography--all";

test.describe("Typography 비주얼", () => {
  test.beforeEach(async ({ page }) => {
    await initPage(page);
    await page.goto(`/iframe.html?id=${storyId}`);
    await waitFunction(page);
    await deleteCSS(page);
  });

  test("H1/H2/H3/H4/P 조합 스냅샷", async ({ page }) => {
    await expect(page).toHaveScreenshot("typography-all.png");
  });
});
