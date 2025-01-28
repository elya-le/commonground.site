/** @type { import('@storybook/svelte-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|ts|svelte)"],
  addons: [
    "@storybook/addon-svelte-csf",
    "@storybook/addon-essentials",
    "@storybook/addon-links",        // added this
    "@chromatic-com/storybook",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/sveltekit",
    options: {}
  },
  docs: {                           // added this
    autodocs: 'tag'
  }
};
export default config;