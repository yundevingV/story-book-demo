// tests/accessibility/card/with-action-card.spec.ts
import { deleteCSS } from "../../helper/deleteCSS";
import { initPage } from "../../helper/initPage";
import { waitFunction } from "../../helper/waitFunction";
import { test, expect } from "@playwright/test";

test.describe("With Action Card 접근성 테스트", () => {
  // before start test
  test.beforeEach(async ({ page }) => {
    await initPage(page);

    // Card 스토리가 존재하는지 확인하고 적절한 스토리로 이동
    await page.goto("/iframe.html?id=card--with-action&viewMode=story");

    await waitFunction(page);

    await deleteCSS(page);
  });

  test("Card 기본 렌더링 테스트", async ({ page }) => {
    const card = page.locator("button:has-text('닫기')");

    await expect(card).toBeVisible();
    await expect(card).toContainText("닫기");
  });

  test("Card 클릭 테스트", async ({ page }) => {
    const card = page.locator("button:has-text('닫기')");

    await expect(card).toBeEnabled();
    await card.click();
    await expect(card).toBeVisible();
  });
});
