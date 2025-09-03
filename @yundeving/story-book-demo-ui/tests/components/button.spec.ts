// tests/components/button.spec.ts
import { test, expect } from "@playwright/test";

// example button test
test.describe("Button Component", () => {
  test("기본 버튼이 렌더링되어야 함", async ({ page }) => {
    await page.goto("/iframe.html?id=button--example");

    const button = page.locator("button:has-text('Button')");

    await expect(button).toBeVisible();
    await expect(button).toContainText("Button");
  });

  test("버튼 클릭이 작동해야 함", async ({ page }) => {
    await page.goto("/iframe.html?id=button--example");

    const button = page.locator("button:has-text('Button')");

    // 클릭 전 상태 확인
    await expect(button).toBeEnabled();

    // 클릭 실행
    await button.click();

    // 클릭 후 여전히 활성화 상태인지 확인
    await expect(button).toBeVisible();
  });
});

// variant button test
test.describe("Variant Button Component", () => {
  test("모든 variant가 렌더링되어야 함", async ({ page }) => {
    await page.goto("/iframe.html?id=button--variant-button-list");

    await expect(page.locator("button:has-text('default')")).toBeVisible();
    await expect(page.locator("button:has-text('primary')")).toBeVisible();
    await expect(page.locator("button:has-text('secondary')")).toBeVisible();
    await expect(page.locator("button:has-text('accent')")).toBeVisible();
    await expect(page.locator("button:has-text('info')")).toBeVisible();
    await expect(page.locator("button:has-text('success')")).toBeVisible();
    await expect(page.locator("button:has-text('warning')")).toBeVisible();
    await expect(page.locator("button:has-text('error')")).toBeVisible();
    await expect(page.locator("button:has-text('ghost')")).toBeVisible();
  });
});

// size button test
test.describe("Size Button Component", () => {
  test("정확한 버튼 높이", async ({ page }) => {
    await page.goto("/iframe.html?id=button--size-button-list");

    const mdButton = page.locator("button:has-text('md')");
    const mdBox = await mdButton.boundingBox();

    expect(mdBox.height).toBe(36);

    const smButton = page.locator("button:has-text('sm')");
    const smBox = await smButton.boundingBox();

    expect(smBox.height).toBe(32);

    const lgButton = page.locator("button:has-text('lg')");
    const lgBox = await lgButton.boundingBox();

    expect(lgBox.height).toBe(40);
  });
});

// loading button test
test.describe("Loading Button Component", () => {
  test("로딩 상태에서 버튼이 비활성화되어야 함", async ({ page }) => {
    await page.goto("/iframe.html?id=button--loading-button-list");

    const button = page.locator("button:has-text('Loading')");
    await expect(button).toBeDisabled();
  });
});
