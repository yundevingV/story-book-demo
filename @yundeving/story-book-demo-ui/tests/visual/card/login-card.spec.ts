// tests/visual/card/login-card.spec.ts
import { deleteCSS } from "../../helper/deleteCSS";
import { initPage } from "../../helper/initPage";
import { waitFunction } from "../../helper/waitFunction";
import { test, expect } from "@playwright/test";

// tests/visual/card/login-card.spec.ts
test.describe("Login Card 시각적 테스트", () => {
  test.beforeEach(async ({ page }) => {
    await initPage(page);

    await page.goto("/iframe.html?id=card--login&viewMode=story");

    await waitFunction(page);

    await deleteCSS(page);
  });

  test("Login Card 시각적 테스트", async ({ page }) => {
    await expect(page).toHaveScreenshot("login-card.png");
  });
});
