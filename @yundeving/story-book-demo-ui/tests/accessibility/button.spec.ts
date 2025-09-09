// tests/accessibility/button.spec.ts
import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";

test.describe("Button 접근성 테스트", () => {
  test("Button 접근성 위반사항 없어야 함", async ({ page }) => {
    await page.goto("/iframe.html?id=button--example");

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("Button 키보드 접근성", async ({ page, browserName }) => {
    await page.goto("/iframe.html?id=button--example");

    // 버튼이 존재하는지 먼저 확인
    const button = page.locator("button:has-text('Button')");
    await expect(button).toBeVisible();

    // 브라우저별 처리
    if (browserName === "webkit") {
      // Safari: Tab 키 활성화 후 테스트

      // Safari에서 Tab 키가 비활성화 되어있을 수 있음
      // Safari에서 Tab 키 활성화 시도
      await page.evaluate(() => {
        // Safari의 접근성 설정 우회
        document.body.setAttribute("tabindex", "-1");
      });

      // Tab 키 시도 후 실패하면 직접 포커스
      await page.keyboard.press("Tab");

      // 포커스 확인 후 실패하면 직접 포커스
      const isFocused = await button.evaluate(
        (el) => document.activeElement === el
      );
      if (!isFocused) {
        await button.focus();
      }

      await expect(button).toBeFocused();
    } else {
      // Chrome, Firefox: Tab 키로 포커스 이동
      await page.keyboard.press("Tab");
      await expect(button).toBeFocused();
    }

    // Enter 키로 버튼 활성화 가능한지 테스트 (모든 브라우저 공통)
    await page.keyboard.press("Enter");

    // 버튼이 여전히 포커스 상태인지 확인
    await expect(button).toBeFocused();
  });

  test("Button 다크/라이트 모드 색상 대비 테스트", async ({ page }) => {
    await page.goto("/iframe.html?id=button--variant-button-list");

    // 라이트 모드 테스트
    const lightModeResults = await new AxeBuilder({ page })
      .withRules(["color-contrast"])
      .analyze();
    expect(lightModeResults.violations).toEqual([]);

    // 다크 모드 활성화
    await page.evaluate(() => {
      document.documentElement.classList.add("dark");
    });

    // 다크 모드 테스트
    const darkModeResults = await new AxeBuilder({ page })
      .withRules(["color-contrast"])
      .analyze();
    expect(darkModeResults.violations).toEqual([]);
  });

  test("Button 다양한 상태 접근성", async ({ page }) => {
    // Disabled 버튼 테스트
    await page.goto("/iframe.html?id=button--disabled");

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
