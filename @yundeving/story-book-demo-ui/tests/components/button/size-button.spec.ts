import { deleteCSS } from "../../helper/deleteCSS";
import { initPage } from "../../helper/initPage";
import { waitFunction } from "../../helper/waitFunction";
import { test, expect } from "@playwright/test";

const BUTTON_HEIGHT = {
  MD: 36,
  SM: 32,
  LG: 40,
};

// size button test
test.describe("Size Button Component", () => {
  test("정확한 버튼 높이", async ({ page }) => {
    await initPage(page);

    await page.goto("/iframe.html?id=button--size-button-list");

    await waitFunction(page);

    await deleteCSS(page);

    const sizes = [
      { name: "md", height: BUTTON_HEIGHT.MD },
      { name: "sm", height: BUTTON_HEIGHT.SM },
      { name: "lg", height: BUTTON_HEIGHT.LG },
    ];

    for (const { name, height } of sizes) {
      const button = page.locator(`button:has-text('${name}')`);
      const box = await button.boundingBox();
      expect(box).not.toBeNull();
      expect(box!.height).toBe(height);
    }
  });
});
