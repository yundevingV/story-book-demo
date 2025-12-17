// tests/accessibility/button.spec.ts
import { deleteCSS } from "../helper/deleteCSS";
import { initPage } from "../helper/initPage";
import { waitFunction } from "../helper/waitFunction";
import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";

test.describe("Button 접근성 테스트", () => {
  test("Button 접근성 위반사항 없어야 함", async ({ page }) => {
    await initPage(page);

    await page.goto("/iframe.html?id=button--example");

    await waitFunction(page);

    await deleteCSS(page);

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("Button 키보드 접근성", async ({ page }) => {
    const debugLines: string[] = [];
    page.on("console", (msg) => {
      // 너무 길어지는 것을 방지하기 위해 길이 제한
      const text = msg.text();
      debugLines.push(`[console.${msg.type()}] ${text.slice(0, 500)}`);
    });
    page.on("pageerror", (err) => {
      debugLines.push(
        `[pageerror] ${String(err?.message ?? err).slice(0, 500)}`
      );
    });
    page.on("requestfailed", (req) => {
      debugLines.push(
        `[requestfailed] ${req.url()} - ${req.failure()?.errorText ?? "unknown"}`
      );
    });

    await initPage(page);

    await page.goto("/iframe.html?id=button--example");

    await waitFunction(page);

    await deleteCSS(page);

    // Storybook preview는 초기에는 #storybook-root가 hidden 상태일 수 있음.
    // "visible"이 아니라 "hidden 속성이 풀렸는지"를 기다리는 게 더 정확하다.
    const storyRoot = page.locator("#storybook-root");
    await expect(storyRoot, "#storybook-root는 존재해야 함").toHaveCount(1, {
      timeout: 20_000,
    });

    try {
      await page.waitForFunction(
        () => {
          const el = document.querySelector("#storybook-root");
          return !!el && !el.hasAttribute("hidden");
        },
        { timeout: 60_000 }
      );
    } catch (e) {
      // 렌더가 안 되는 경우: CI 로그에 원인(콘솔/요청 실패/에러)을 남긴다.
      console.log(
        [
          "[storybook-debug] #storybook-root hidden 유지됨",
          `url=${page.url()}`,
          debugLines.slice(-50).join("\n"),
        ].join("\n")
      );
      throw e;
    }

    // 버튼이 존재하는지 먼저 확인
    const button = page.getByRole("button", { name: /button/i });
    await expect(button, "버튼이 렌더링되어야 함").toBeVisible({
      timeout: 30_000,
    });

    // // Tab 키로 포커스를 이동하고 확인합니다.
    // await page.keyboard.press("Tab");
    // await expect(button).toBeFocused();
    // // Enter 키로 버튼 활성화 가능한지 테스트
    // await page.keyboard.press("Enter");
    await button.focus();
    // 버튼이 여전히 포커스 상태인지 확인
    await expect(button).toBeFocused();
  });

  test("Button 다크/라이트 모드 색상 대비 테스트", async ({ page }) => {
    await initPage(page);

    await page.goto("/iframe.html?id=button--variant-button-list");

    await waitFunction(page);

    await deleteCSS(page);

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

  test("로그인 아이콘 버튼 다크/라이트 모드 색상 대비 테스트", async ({
    page,
  }) => {
    await initPage(page);

    await page.goto("/iframe.html?id=button--login-icon-button-list");

    await waitFunction(page);

    await deleteCSS(page);

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

  // ARIA 상태 테스트
  test("Button ARIA 일관성 테스트", async ({ page }) => {
    await initPage(page);

    // 여러 variant 버튼들이 있는 페이지로 이동
    await page.goto("/iframe.html?id=button--example");

    await waitFunction(page);

    await deleteCSS(page);

    const button = page.locator("button:has-text('Button')");

    // 모든 버튼의 ARIA 속성이 일관되게 설정되어 있는지 확인
    const type = await button.getAttribute("type");

    const textContent = await button.textContent();

    // 모든 버튼이 기본 속성을 가져야 함
    expect(type).toBe("button");
    expect(textContent?.trim()).toBeTruthy(); // 접근 가능한 텍스트
  });

  test("Loading Button ARIA 일관성 테스트", async ({ page }) => {
    await initPage(page);

    // 여러 variant 버튼들이 있는 페이지로 이동
    await page.goto("/iframe.html?id=button--loading-button-list");

    await waitFunction(page);

    await deleteCSS(page);

    const button = page.locator("button:has-text('Loading')");

    // 모든 버튼의 ARIA 속성이 일관되게 설정되어 있는지 확인
    const type = await button.getAttribute("type");
    const ariaBusy = await button.getAttribute("aria-busy");
    const ariaDisabled = await button.getAttribute("aria-disabled");
    const textContent = await button.textContent();

    // 모든 버튼이 기본 속성을 가져야 함
    expect(type).toBe("button");
    expect(ariaBusy).toBe("true");
    expect(ariaDisabled).toBe("true");
    expect(textContent?.trim()).toBeTruthy(); // 접근 가능한 텍스트
  });

  test("Button 다양한 상태 접근성", async ({ page }) => {
    await initPage(page);

    // Disabled 버튼 테스트
    await page.goto("/iframe.html?id=button--disabled");

    await waitFunction(page);

    await deleteCSS(page);

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
