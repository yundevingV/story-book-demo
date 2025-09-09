import { Page } from "@playwright/test";

export const waitFunction = async (page: Page) => {
  // DOM이 500ms 이상 활동안하면 안정화로 간주
  await page.waitForFunction(
    () => {
      const last = (window as Window).__domTicks ?? 0;

      (window as Window).__lastCheck ??= {
        t: performance.now(),
        v: last,
      } as Window["__lastCheck"];

      const cur = (window as Window).__domTicks;

      if (cur !== (window as Window).__lastCheck.v) {
        (window as Window).__lastCheck = { t: performance.now(), v: cur };
        return false;
      }

      return performance.now() - (window as Window).__lastCheck.t > 500;
    },
    { timeout: 5000 }
  );
};
