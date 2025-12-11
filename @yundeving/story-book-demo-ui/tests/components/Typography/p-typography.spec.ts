import { deleteCSS } from "../../helper/deleteCSS";
import { initPage } from "../../helper/initPage";
import { waitFunction } from "../../helper/waitFunction";
import { expect, test } from "@playwright/test";

const storyId = "typography--p";

test.describe("Typography P 구조/정렬", () => {
  test.beforeEach(async ({ page }) => {
    await initPage(page);
    await waitFunction(page);
    await deleteCSS(page);
  });

  test("p 는 role=paragraph 가 아닌 실제 <p> 요소로 렌더링", async ({
    page,
  }) => {
    await page.goto(`/iframe.html?id=${storyId}`);
    const story = page.locator("#storybook-root");
    const p = story.locator("p").first();
    await expect(p).toBeVisible();
  });

  test("className 주입 테스트", async ({ page }) => {
    await page.goto(`/iframe.html?id=${storyId}&args=className:text-left`);
    const story = page.locator("#storybook-root");
    const pLeft = story.locator("p").first();
    await expect(await pLeft.getAttribute("class")).toMatch(/text-left/);
    await expect(
      await pLeft.evaluate(
        (el) => getComputedStyle(el as HTMLElement).textAlign
      )
    ).toBe("left");
  });
});
