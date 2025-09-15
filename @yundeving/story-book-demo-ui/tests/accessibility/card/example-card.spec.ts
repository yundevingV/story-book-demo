// tests/accessibility/card.spec.ts
import { initPage } from "../../helper/initPage";
import { waitFunction } from "../../helper/waitFunction";
import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";

test.describe("Card 접근성 테스트", () => {
  // before start test
  test.beforeEach(async ({ page }) => {
    await initPage(page);

    // Card 스토리가 존재하는지 확인하고 적절한 스토리로 이동
    await page.goto("/iframe.html?id=card--example&viewMode=story");

    await waitFunction(page);

    // await deleteCSS(page);
  });

  test("Card 기본 접근성 위반사항 없어야 함", async ({ page }) => {
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("Card 색상 대비 테스트 (라이트 모드)", async ({ page }) => {
    // 라이트 모드 확인
    await page.evaluate(() => {
      document.documentElement.classList.remove("dark");
    });

    const lightModeResults = await new AxeBuilder({ page })
      .withRules(["color-contrast"])
      .analyze();

    expect(lightModeResults.violations).toEqual([]);
  });

  test("Card 키보드 접근성 테스트", async ({ page }) => {
    // Card가 포커스 가능한지 확인
    const card = page
      .locator('[data-testid="card"], .card, [role="article"]')
      .first();

    if ((await card.count()) > 0) {
      await card.focus();
      await expect(card).toBeFocused();
    }
  });
});

test.describe("Card 색상 대비 테스트", () => {
  test.use({ colorScheme: "dark" });

  test.beforeEach(async ({ page }) => {
    await initPage(page);

    // Card 스토리가 존재하는지 확인하고 적절한 스토리로 이동
    await page.goto("/iframe.html?id=card--example&viewMode=story");

    await waitFunction(page);
    // await deleteCSS(page);
  });

  test("Card 색상 대비 테스트 (다크 모드)", async ({ page }) => {
    const darkModeResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "color-contrast"])
      .analyze();

    expect(darkModeResults.violations).toEqual([]);
  });
});
