// tests/components/radiogroup.spec.ts
import { test, expect } from "@playwright/test";

test.describe("RadioGroup Component", () => {
  test("단일 선택만 가능해야 함", async ({ page }) => {
    await page.goto("/iframe.html?id=radiogroup--example");

    const radio1 = page.locator('[role="radio"]').first();
    const radio2 = page.locator('[role="radio"]').nth(1);
    const radio3 = page.locator('[role="radio"]').nth(2);

    // 첫 번째 라디오 선택
    await radio1.click();
    await expect(radio1).toHaveAttribute("aria-checked", "true");
    await expect(radio2).toHaveAttribute("aria-checked", "false");
    await expect(radio3).toHaveAttribute("aria-checked", "false");

    // 두 번째 라디오 선택 (첫 번째는 자동 해제)
    await radio2.click();
    await expect(radio1).toHaveAttribute("aria-checked", "false");
    await expect(radio2).toHaveAttribute("aria-checked", "true");
    await expect(radio3).toHaveAttribute("aria-checked", "false");
  });
});
