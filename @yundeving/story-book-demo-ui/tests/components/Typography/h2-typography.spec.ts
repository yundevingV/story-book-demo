import { deleteCSS } from "../../helper/deleteCSS";
import { initPage } from "../../helper/initPage";
import { waitFunction } from "../../helper/waitFunction";
import { expect, test } from "@playwright/test";

const storyId = "typography--h-2";

test.describe("Typography H2 구조/정렬", () => {
  test.beforeEach(async ({ page }) => {
    await initPage(page);
    await waitFunction(page);
    await deleteCSS(page);
  });
  test("variant=h2 는 role=heading level=2 로 렌더링", async ({ page }) => {
    await page.goto(`/iframe.html?id=${storyId}`);
    const story = page.locator("#storybook-root");
    const heading = story.getByRole("heading", { level: 2 });
    await expect(heading).toBeVisible();
  });

  test("className 주입 테스트", async ({ page }) => {
    await page.goto(`/iframe.html?id=${storyId}&args=className:text-left`);
    const story = page.locator("#storybook-root");
    const hLeft = story.locator("h2").first();
    await expect(await hLeft.getAttribute("class")).toMatch(/text-left/);
    await expect(
      await hLeft.evaluate(
        (el) => getComputedStyle(el as HTMLElement).textAlign
      )
    ).toBe("left");
  });
});
