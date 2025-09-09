import { Page } from "@playwright/test";

// 애니메이션/트랜지션 노이즈 제거
export const deleteCSS = async (page: Page) => {
  await page.addStyleTag({
    content: `*{animation:none!important;transition:none!important;caret-color:transparent!important}`,
  });
};
