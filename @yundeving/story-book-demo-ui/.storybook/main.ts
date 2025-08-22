import { join, dirname } from "path";
import type { StorybookConfig } from "@storybook/nextjs";

function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, "package.json")));
}

/** @type { import('@storybook/nextjs').StorybookConfig } */
const config: StorybookConfig = {
  stories: ["../ui/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {},
  },
};
export default config;
