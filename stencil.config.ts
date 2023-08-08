import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'technews-web-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'www',
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
