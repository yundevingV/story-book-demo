// tests/accessibility/card.spec.ts
import { deleteCSS } from "../../helper/deleteCSS";
import { initPage } from "../../helper/initPage";
import { waitFunction } from "../../helper/waitFunction";
import { test, expect } from "@playwright/test";

test.describe(" Card 컴포넌트 테스트", () => {
  // before start test
  test.beforeEach(async ({ page }) => {
    await initPage(page);

    // Card 스토리가 존재하는지 확인하고 적절한 스토리로 이동
    await page.goto("/iframe.html?id=card--example&viewMode=story");

    await waitFunction(page);

    await deleteCSS(page);
  });

  test("기본 렌더링 테스트", async ({ page }) => {
    const button = page.locator("button:has-text('확인')");

    await expect(button).toBeVisible();
    await expect(button).toContainText("확인");
  });

  test("클릭 테스트", async ({ page }) => {
    const button = page.locator("button:has-text('확인')");

    await expect(button).toBeEnabled();
    await button.click();
    await expect(button).toBeVisible();
  });
});
