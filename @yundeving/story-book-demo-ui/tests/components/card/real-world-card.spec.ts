// tests/accessibility/card/real-world-card.spec.ts
import { deleteCSS } from "../../helper/deleteCSS";
import { initPage } from "../../helper/initPage";
import { waitFunction } from "../../helper/waitFunction";
import { test, expect } from "@playwright/test";

test.describe("Real World Card 접근성 테스트", () => {
  // before start test
  test.beforeEach(async ({ page }) => {
    await initPage(page);

    // Card 스토리가 존재하는지 확인하고 적절한 스토리로 이동
    await page.goto("/iframe.html?id=card--real-world-example&viewMode=story");

    await waitFunction(page);

    await deleteCSS(page);
  });
  test("사용자 프로필 카드 렌더링 테스트", async ({ page }) => {
    const button = page.locator("button:has-text('프로필 편집')");

    await expect(button).toBeVisible();
    await expect(button).toContainText("프로필 편집");
  });

  test("사용자 프로필 카드 클릭 테스트", async ({ page }) => {
    const button = page.locator("button:has-text('프로필 편집')");

    await expect(button).toBeEnabled();
    await button.click();
    await expect(button).toBeVisible();
  });

  test("통계 카드 렌더링 테스트", async ({ page }) => {
    const button = page.locator("button:has-text('자세히 보기')");

    await expect(button).toBeEnabled();
    await button.click();
    await expect(button).toBeVisible();
  });

  test("통계 카드 클릭 테스트", async ({ page }) => {
    const button = page.locator("button:has-text('자세히 보기')");

    await expect(button).toBeEnabled();
    await button.click();
    await expect(button).toBeVisible();
  });
});
