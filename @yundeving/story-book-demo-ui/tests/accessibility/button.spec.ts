// tests/accessibility/button.spec.ts
import { deleteCSS } from "../helper/deleteCSS";
import { initPage } from "../helper/initPage";
import { waitFunction } from "../helper/waitFunction";
import AxeBuilder from "@axe-core/playwright";
import { test, expect, type Page } from "@playwright/test";

test.describe("Button 접근성 테스트", () => {
  const logActiveElement = async (page: Page, label: string) => {
    const active = await page.evaluate(() => {
      const el = document.activeElement as HTMLElement | null;
      if (!el) return "null";
      const tag = el.tagName.toLowerCase();
      const id = el.id ? `#${el.id}` : "";
      const cls =
        el.className && typeof el.className === "string"
          ? `.${el.className}`.replace(/\s+/g, ".")
          : "";
      const name =
        el.getAttribute("aria-label") ||
        el.textContent?.trim()?.slice(0, 80) ||
        "";
      return `${tag}${id}${cls} "${name}"`;
    });
    console.log(`[focus] ${label}: ${active}`);
  };

  const listFocusable = async (page: Page) => {
    const focusables = await page.evaluate(() => {
      const selector =
        'a[href],button,input,select,textarea,[tabindex]:not([tabindex="-1"])';
      const els = Array.from(
        document.querySelectorAll(selector)
      ) as HTMLElement[];
      const isVisible = (el: HTMLElement) => {
        const style = window.getComputedStyle(el);
        if (style.visibility === "hidden" || style.display === "none")
          return false;
        // offsetParent is null for fixed in some cases; fallback to rect
        const r = el.getBoundingClientRect();
        return r.width > 0 && r.height > 0;
      };

      return els
        .filter((el) => {
          const disabled =
            (el as HTMLButtonElement).disabled === true ||
            el.getAttribute("aria-disabled") === "true";
          const hidden =
            el.getAttribute("aria-hidden") === "true" ||
            el.hasAttribute("hidden");
          return !disabled && !hidden && isVisible(el);
        })
        .slice(0, 30)
        .map((el) => {
          const tag = el.tagName.toLowerCase();
          const id = el.id ? `#${el.id}` : "";
          const cls =
            el.className && typeof el.className === "string"
              ? `.${el.className}`.replace(/\s+/g, ".")
              : "";
          const name =
            el.getAttribute("aria-label") ||
            el.textContent?.trim()?.slice(0, 60) ||
            "";
          const tabindex = el.getAttribute("tabindex");
          return `${tag}${id}${cls}${tabindex ? ` [tabindex=${tabindex}]` : ""} "${name}"`;
        });
    });

    console.log(`[focusables] ${focusables.length} (showing up to 30)`);
    for (const f of focusables) console.log(`- ${f}`);
  };

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
    await initPage(page);

    await page.goto("/iframe.html?id=button--example");

    await waitFunction(page);

    await deleteCSS(page);

    // 버튼이 존재하는지 먼저 확인
    const button = page.getByRole("button", { name: "Button" });
    await expect(button).toBeVisible();

    // CI에서는 Tab 순서/시작점이 달라져서 "Tab 1번이면 버튼" 같은 가정이 자주 깨짐.
    // 대신 "Tab으로 언젠가 버튼에 도달 가능"을 검증한다.
    await listFocusable(page);
    await logActiveElement(page, "before click body");
    await page.locator("body").click({ position: { x: 0, y: 0 } });
    await logActiveElement(page, "after click body");

    let reached = false;
    for (let i = 0; i < 30; i++) {
      await page.keyboard.press("Tab");
      if (await button.evaluate((el) => el === document.activeElement)) {
        reached = true;
        break;
      }
    }

    if (!reached) {
      await logActiveElement(page, "after 30x Tab (not reached)");
      throw new Error(
        "Tab 키 네비게이션으로 'Button'에 포커스가 도달하지 못했습니다 (30회 시도)."
      );
    }

    await expect(button, "Tab 키로 버튼에 포커스가 도달해야 함").toBeFocused();

    await page.keyboard.press("Enter");
    await expect(button, "Enter 이후에도 포커스가 유지되어야 함").toBeFocused();
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
