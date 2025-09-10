import { deleteCSS } from "../../helper/deleteCSS";
import { initPage } from "../../helper/initPage";
import { waitFunction } from "../../helper/waitFunction";
import { test, expect } from "@playwright/test";

// loading button test
test.describe("Loading Button Component", () => {
  test("로딩 상태에서 버튼이 비활성화되어야 함", async ({ page }) => {
    await initPage(page);

    await page.goto("/iframe.html?id=button--loading-button-list");

    await waitFunction(page);

    await deleteCSS(page);

    const button = page.locator("button:has-text('Loading')");
    await expect(button).toBeDisabled();
  });
});
