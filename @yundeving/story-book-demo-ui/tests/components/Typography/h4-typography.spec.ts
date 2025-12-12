import { deleteCSS } from "../../helper/deleteCSS";
import { initPage } from "../../helper/initPage";
import { waitFunction } from "../../helper/waitFunction";
import { expect, test } from "@playwright/test";

const storyId = "typography--h-4";

test.describe("Typography H4 구조/정렬", () => {
  test.beforeEach(async ({ page }) => {
    await initPage(page);
    await waitFunction(page);
    await deleteCSS(page);
  });

  test("variant=h4 는 role=heading level=4 로 렌더링", async ({ page }) => {
    await page.goto(`/iframe.html?id=${storyId}`);
    const story = page.locator("#storybook-root");
    const heading = story.getByRole("heading", { level: 4 });
    await expect(heading).toBeVisible();
  });

  test("className 주입 테스트", async ({ page }) => {
    await page.goto(`/iframe.html?id=${storyId}&args=className:text-center`);
    const story = page.locator("#storybook-root");
    const hCenter = story.locator("h4").first();
    await expect(await hCenter.getAttribute("class")).toMatch(/text-center/);
    await expect(
      await hCenter.evaluate(
        (el) => getComputedStyle(el as HTMLElement).textAlign
      )
    ).toBe("center");
  });
});
