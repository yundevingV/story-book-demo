import { Page } from "@playwright/test";

export const initPage = async (page: Page) => {
  await page.addInitScript(() => {
    let count = 0;
    (window as Window).__domTicks = 0;

    // 감지 옵션 (감지할 변경)
    const config = { attributes: true, childList: true, subtree: true };

    const callback = () => {
      count++;
      requestAnimationFrame(() => {
        (window as Window).__domTicks = count;
      });
    };

    new MutationObserver(callback).observe(document, config);
  });
};
