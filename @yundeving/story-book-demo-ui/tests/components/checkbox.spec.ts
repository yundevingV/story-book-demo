// tests/components/checkbox.spec.ts
import { test, expect } from "@playwright/test";

test.describe("Checkbox Component", () => {
  test("체크박스 토글이 작동해야 함", async ({ page }) => {
    await page.goto("/iframe.html?id=checkbox--example");

    const checkbox = page.locator('[role="checkbox"]');

    // 초기 상태 (체크되지 않음)
    await expect(checkbox).toHaveAttribute("aria-checked", "false");

    // 클릭하여 체크
    await checkbox.click();
    await expect(checkbox).toHaveAttribute("aria-checked", "true");

    // 다시 클릭하여 체크 해제
    await checkbox.click();
    await expect(checkbox).toHaveAttribute("aria-checked", "false");
  });

  test("라벨 클릭으로 토글되어야 함", async ({ page }) => {
    await page.goto("/iframe.html?args=label:Test Label&id=checkbox--example");

    const checkbox = page.locator('[role="checkbox"]');
    const label = page.locator("label");

    // 라벨 클릭
    await label.click();
    await expect(checkbox).toHaveAttribute("aria-checked", "true");
  });

  test("에러 상태가 표시되어야 함", async ({ page }) => {
    await page.goto("/iframe.html?args=error:true&id=checkbox--example");

    const checkbox = page.locator('[role="checkbox"]');
    // 에러 스타일이 적용되었는지 확인 (예: 빨간 테두리)
    await expect(checkbox).toHaveClass(/error/);
  });
});

const variants = ["default", "primary", "success", "error"];

// Variant Checkbox Component
test.describe("Checkbox Variant Component", () => {
  test("모든 variant가 렌더링되어야 함", async ({ page }) => {
    await page.goto("/iframe.html?id=checkbox--variant");

    for (const variant of variants) {
      await expect(page.locator(`label:has-text('${variant}')`)).toBeVisible();
    }
  });
});

// Indeterminate
test("Indeterminate 혹은 Disabled 상태가 렌더링되어야 함", async ({ page }) => {
  await page.goto("/iframe.html?id=checkbox--states");

  const indeterminateCheckbox = page.getByRole("checkbox", {
    name: "Indeterminate",
  });

  await expect(indeterminateCheckbox).toHaveAttribute("aria-checked", "mixed");

  // Disabled 체크박스도 같은 방식으로
  const disabledCheckbox = page.getByRole("checkbox", {
    name: "Disabled",
    exact: true,
  });

  await expect(disabledCheckbox).toBeDisabled();
});
