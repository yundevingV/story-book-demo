// tests/components/button.spec.ts
import { deleteCSS } from "../../helper/deleteCSS";
import { initPage } from "../../helper/initPage";
import { waitFunction } from "../../helper/waitFunction";
import { test, expect } from "@playwright/test";

// example button test
test.describe("Button Component", () => {
  test("기본 버튼이 렌더링되어야 함", async ({ page }) => {
    await initPage(page);

    await page.goto("/iframe.html?id=button--example");

    await waitFunction(page);

    await deleteCSS(page);

    const button = page.locator("button:has-text('Button')");

    await expect(button).toBeVisible();
    await expect(button).toContainText("Button");
  });

  test("버튼 클릭이 작동해야 함", async ({ page }) => {
    await initPage(page);

    await page.goto("/iframe.html?id=button--example");

    await waitFunction(page);

    await deleteCSS(page);

    const button = page.locator("button:has-text('Button')");

    // 클릭 전 상태 확인
    await expect(button).toBeEnabled();

    // 클릭 실행
    await button.click();

    // 클릭 후 여전히 활성화 상태인지 확인
    await expect(button).toBeVisible();
  });

  // 로딩 버튼 테스트
  test("로딩 버튼이 렌더링되어야 함", async ({ page }) => {
    await initPage(page);

    await page.goto("/iframe.html?id=button--example&args=isLoading:true");

    await waitFunction(page);

    await deleteCSS(page);

    const button = page.locator("button:has-text('Button')");

    await expect(button).toBeVisible();
    await expect(button).toContainText("Button");
    await expect(button).toBeDisabled();
  });
});
