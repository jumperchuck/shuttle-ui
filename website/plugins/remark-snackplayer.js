'use strict';
const visit = require('unist-util-visit-parents');
const u = require('unist-builder');
const dedent = require('dedent');
const fromEntries = require('object.fromentries');
const { getSnackPlayerCode } = require('./util');

const parseParams = (paramString = '') => {
  const params = fromEntries(new URLSearchParams(paramString));
  if (!params.platform) {
    params.platform = 'web';
  }

  return params;
};

const simplifyMeta = (meta) => {
  let variables = null;
  variables = meta.split(' ');
  let objectifiedMeta = {};

  variables.map((variable) => {
    if (variable) {
      const temp = variable.split('=');
      objectifiedMeta[temp[0]] = temp[1];
    }
  });
  return { ...objectifiedMeta };
};

const processNode = (node, parent) => {
  return new Promise(async (resolve, reject) => {
    try {
      const params = parseParams(node.meta);
      const simplifedMeta = simplifyMeta(node.meta);
      // Gather necessary Params
      const name = simplifedMeta.name
        ? decodeURIComponent(simplifedMeta.name)
        : 'Example';
      const description = simplifedMeta.description
        ? decodeURIComponent(simplifedMeta.description)
        : 'Example usage';
      const sampleCode = node.value;
      const encodedSampleCode = encodeURIComponent(sampleCode);
      const platform = params.platform || 'web';
      const supportedPlatforms = params.supportedPlatforms || 'ios,android,web';
      const theme = params.theme || 'light';
      const preview = params.preview || 'true';
      const loading = params.loading || 'lazy';
      const dependencies = `@shuttle-ui/components,${
        simplifedMeta.dependencies ? simplifedMeta.dependencies : null
      }`;

      // Generate Node for SnackPlayer
      // See https://github.com/expo/snack/blob/main/docs/embedding-snacks.md
      const snackPlayerDiv = u('html', {
        value: dedent`
          <div
            class="snack-player"
            data-snack-name="${name}"
            data-snack-description="${description}"
            data-snack-code="${encodedSampleCode}"
            data-snack-platform="${platform}"
            data-snack-supported-platforms="${supportedPlatforms}"
            data-snack-theme="${theme}"
            data-snack-preview="${preview}"
            data-snack-loading="${loading}"
            data-snack-dependencies="${dependencies}"
          ></div>
          `,
      });

      // Replace code block with SnackPlayer Node
      const index = parent[0].children.indexOf(node);
      parent[0].children.splice(index, 1, snackPlayerDiv);
    } catch (e) {
      return reject(e);
    }
    resolve();
  });
};

const SnackPlayer = () => {
  return (tree) =>
    new Promise(async (resolve, reject) => {
      const nodesToProcess = [];
      // Parse all CodeBlocks
      visit(tree, 'code', (node, parent) => {
        // Add SnackPlayer CodeBlocks to processing queue
        if (node.lang === 'SnackPlayer') {
          nodesToProcess.push(processNode(node, parent));
        } else if (node.lang === 'ComponentSnackPlayer') {
          const path = node.meta.split('path=')[1];
          const code = getSnackPlayerCode(path);
          node.value = `${code}
          import { Provider, Box } from '@shuttle-ui/components';
          
          export default () => {
            return (
              <Provider>
                <Box flex={1} center>
                  <Example/>
                </Box>
              </Provider>
            )
          }
          `;
          nodesToProcess.push(processNode(node, parent));
        }
      });

      // Wait for all promises to be resolved
      Promise.all(nodesToProcess).then(resolve()).catch(reject());
    });
};

module.exports = SnackPlayer;
