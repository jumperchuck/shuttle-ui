const path = require('path');
const colorModePak = require('../packages/color-mode/package.json');
const componentsPak = require('../packages/components/package.json');
const systemPak = require('../packages/system/package.json');
const themePak = require('../packages/theme/package.json');
const utilsPak = require('../packages/utils/package.json');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.tsx', '.ts', '.js', '.json'],
          alias: {
            // For development, we want to alias the library to the source
            [colorModePak.name]: path.join(
              __dirname,
              '../packages/color-mode',
              colorModePak.source,
            ),
            [componentsPak.name]: path.join(
              __dirname,
              '../packages/components',
              colorModePak.source,
            ),
            [systemPak.name]: path.join(
              __dirname,
              '../packages/system',
              colorModePak.source,
            ),
            [themePak.name]: path.join(
              __dirname,
              '../packages/theme',
              colorModePak.source,
            ),
            [utilsPak.name]: path.join(
              __dirname,
              '../packages/utils',
              colorModePak.source,
            ),
          },
        },
      ],
    ],
  };
};
