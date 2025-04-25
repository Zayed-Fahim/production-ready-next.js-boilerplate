import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-styling',
    '@storybook/addon-a11y'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      builder: {
        useSWC: true
      }
    }
  },
  staticDirs: ['../public'],
  docs: {
    autodocs: 'tag'
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript'
  },

  webpackFinal: async (config) => {
    const fileLoaderRule = config.module?.rules?.find((rule) => {
      if (rule && typeof rule === 'object' && 'test' in rule) {
        return rule.test instanceof RegExp && rule.test.test('.svg');
      }
      return false;
    });

    if (fileLoaderRule && typeof fileLoaderRule === 'object') {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    config.module?.rules?.push({
      test: /\.svg$/i,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      removeViewBox: false
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    });

    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src')
      };
    }

    return config;
  }
};

export default config;
