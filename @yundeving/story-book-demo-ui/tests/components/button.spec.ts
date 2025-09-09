// tests/components/button.spec.ts
import { deleteCSS } from "../helper/deleteCSS";
import { initPage } from "../helper/initPage";
import { waitFunction } from "../helper/waitFunction";
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
});

const variants = [
  "default",
  "primary",
  "secondary",
  "accent",
  "info",
  "success",
  "warning",
  "error",
  "ghost",
];

// variant button test
test.describe("Variant Button Component", () => {
  test("모든 variant가 렌더링되어야 함", async ({ page }) => {
    await initPage(page);

    await page.goto("/iframe.html?id=button--variant-button-list");

    await waitFunction(page);

    await deleteCSS(page);

    for (const variant of variants) {
      await expect(page.locator(`button:has-text('${variant}')`)).toBeVisible();
    }
  });
});

const BUTTON_HEIGHT = {
  MD: 36,
  SM: 32,
  LG: 40,
};

// size button test
test.describe("Size Button Component", () => {
  test("정확한 버튼 높이", async ({ page }) => {
    await initPage(page);

    await page.goto("/iframe.html?id=button--size-button-list");

    await waitFunction(page);

    await deleteCSS(page);

    const sizes = [
      { name: "md", height: BUTTON_HEIGHT.MD },
      { name: "sm", height: BUTTON_HEIGHT.SM },
      { name: "lg", height: BUTTON_HEIGHT.LG },
    ];

    for (const { name, height } of sizes) {
      const button = page.locator(`button:has-text('${name}')`);
      const box = await button.boundingBox();
      expect(box).not.toBeNull();
      expect(box!.height).toBe(height);
    }
  });
});

// loading button test
test.describe("Loading Button Component", () => {
  test("로딩 상태에서 버튼이 비활성화되어야 함", async ({ page }) => {
    await initPage(page);

    await page.goto("/iframe.html?id=button--loading-button-list");

    await waitFunction(page);

    await deleteCSS(page);

    const button = page.locator("button:has-text('Loading')");
    await expect(button).toBeDisabled();
  });
});
