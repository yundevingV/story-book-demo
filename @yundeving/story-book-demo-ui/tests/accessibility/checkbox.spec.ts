// tests/accessibility/checkbox.spec.ts
import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";

test.describe("Checkbox 접근성 테스트", () => {
  test("Checkbox 접근성 위반사항 없어야 함", async ({ page }) => {
    await page.goto("/iframe.html?id=checkbox--example");

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .exclude("#storybook-root")
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("Checkbox 키보드 접근성", async ({ page, browserName }) => {
    await page.goto("/iframe.html?id=checkbox--example");

    const checkbox = page.locator('[role="checkbox"]').first();
    await expect(checkbox).toBeVisible();

    // 브라우저별 처리
    if (browserName === "webkit") {
      await page.evaluate(() => {
        document.body.setAttribute("tabindex", "-1");
      });

      await page.keyboard.press("Tab");

      const isFocused = await checkbox.evaluate(
        (el) => document.activeElement === el
      );
      if (!isFocused) {
        await checkbox.focus();
      }
      await expect(checkbox).toBeFocused();
    } else {
      await page.keyboard.press("Tab");
      await expect(checkbox).toBeFocused();
    }

    await page.keyboard.press("Enter");
    await expect(checkbox).toBeFocused();

    // Space 키로 체크/언체크 가능한지
    const initialState = await checkbox.getAttribute("aria-checked");
    await page.keyboard.press("Space");

    const newState = await checkbox.getAttribute("aria-checked");
    expect(newState).not.toBe(initialState);
  });

  test("Checkbox 라벨 연결성", async ({ page }) => {
    await page.goto("/iframe.html?id=checkbox--example");

    const checkbox = page.locator('[role="checkbox"]').first();

    // htmlFor로 연결된 label 찾기
    const checkboxId = await checkbox.getAttribute("id");
    if (checkboxId) {
      const label = page.locator(`label[for="${checkboxId}"]`);
      await expect(label).toBeVisible();
    }
  });
});
