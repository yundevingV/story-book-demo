// tests/visual/visual-regression.spec.ts
import { deleteCSS } from "../helper/deleteCSS";
import { initPage } from "../helper/initPage";
import { waitFunction } from "../helper/waitFunction";
import { test, expect } from "@playwright/test";

test.describe("Visual Regression Tests", () => {
  test("Button 모든 variant 스크린샷", async ({ page }) => {
    await initPage(page);

    await page.goto("/iframe.html?id=button--variant-button-list", {
      waitUntil: "domcontentloaded",
    });
    await waitFunction(page);

    await deleteCSS(page);

    await expect(page).toHaveScreenshot("");
  });

  test("Checkbox 모든 상태 스크린샷", async ({ page }) => {
    await initPage(page);

    await page.goto("/iframe.html?id=checkbox--example", {
      waitUntil: "domcontentloaded",
    });

    await waitFunction(page);

    await deleteCSS(page);

    await expect(page).toHaveScreenshot("");
  });

  test("반응형 디자인 테스트", async ({ page }) => {
    // DOM 변화를 카운트하는 init script를 사전 주입하여 안정 시점 판단
    await initPage(page);

    // 모바일 뷰포트로 설정
    await page.setViewportSize({ width: 375, height: 667 });

    await page.goto("/iframe.html?id=button--size-button-list", {
      waitUntil: "domcontentloaded",
    });

    await waitFunction(page);

    // 애니메이션/트랜지션 노이즈 제거
    await deleteCSS(page);

    await expect(page).toHaveScreenshot("");
  });
});
