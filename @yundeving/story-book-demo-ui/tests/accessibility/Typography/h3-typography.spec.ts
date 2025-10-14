import { deleteCSS } from "../../helper/deleteCSS";
import { initPage } from "../../helper/initPage";
import { waitFunction } from "../../helper/waitFunction";
import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Typography H3 접근성 테스트", () => {
  test("Typography H3 접근성 위반사항 없어야 함", async ({ page }) => {
    await initPage(page);

    await page.goto("/iframe.html?id=typography--h-3");

    await waitFunction(page);

    await deleteCSS(page);

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
