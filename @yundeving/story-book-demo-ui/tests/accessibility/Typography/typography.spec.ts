import { deleteCSS } from "../../helper/deleteCSS";
import { initPage } from "../../helper/initPage";
import { waitFunction } from "../../helper/waitFunction";
import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const ids = [
  "typography--h-1",
  "typography--h-2",
  "typography--h-3",
  "typography--h-4",
  "typography--p",
];

test.describe("Typography P 접근성 테스트", () => {
  test("모든 typography가 접근성 위반사항 없어야 함", async ({ page }) => {
    await initPage(page);

    for (const id of ids) {
      await page.goto(`/iframe.html?id=${id}`);
    }

    await waitFunction(page);
    await deleteCSS(page);

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
