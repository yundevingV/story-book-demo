// tests/accessibility/radiogroup.spec.ts
import { deleteCSS } from "../helper/deleteCSS";
import { initPage } from "../helper/initPage";
import { waitFunction } from "../helper/waitFunction";
import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";

test.describe("RadioGroup 접근성 테스트", () => {
  test("RadioGroup 접근성 위반사항 없어야 함", async ({ page }) => {
    await initPage(page);

    await page.goto("/iframe.html?id=radiogroup--example");

    await waitFunction(page);

    await deleteCSS(page);

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .exclude("#storybook-root")
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("RadioGroup 키보드 접근성", async ({ page }) => {
    await initPage(page);

    await page.goto("/iframe.html?id=radiogroup--example");

    await waitFunction(page);

    await deleteCSS(page);

    const radioGroup = page.locator('[role="radiogroup"]');
    await expect(radioGroup).toBeVisible();

    const firstRadio = page.locator('[role="radio"]').first();
    const secondRadio = page.locator('[role="radio"]').nth(1);
    const thirdRadio = page.locator('[role="radio"]').nth(2);

    // Tab으로 라디오 그룹에 접근
    await page.keyboard.press("Tab");
    await expect(firstRadio).toBeFocused();

    // Space로 첫 번째 라디오 선택 (중요!)
    await page.keyboard.press("Space");
    await expect(firstRadio).toHaveAttribute("aria-checked", "true");

    // 이제 화살표 키로 이동 및 선택
    await page.keyboard.press("ArrowDown");
    await expect(secondRadio).toBeFocused();
    await expect(secondRadio).toHaveAttribute("aria-checked", "true");
    await expect(firstRadio).toHaveAttribute("aria-checked", "false");

    // 다시 이동
    await page.keyboard.press("ArrowDown");
    await expect(thirdRadio).toBeFocused();
    await expect(thirdRadio).toHaveAttribute("aria-checked", "true");

    // 순환 확인
    await page.keyboard.press("ArrowDown");
    await expect(firstRadio).toBeFocused();
    await expect(firstRadio).toHaveAttribute("aria-checked", "true");
  });
});
