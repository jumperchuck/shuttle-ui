const path = require('path');
const fs = require('fs');

/**
 * @storybook/addons/dist/index.js引入了es.promise.js文件，导致promise无法使用
 */
const promisePath = path.resolve('node_modules/core-js/modules/es.promise.js');
fs.writeFileSync(promisePath, '');

/**
 * react-native-modal-selector/index.js 兼容Web
 */
const modalSelectorPath = path.resolve(
  'node_modules/react-native-modal-selector/index.js',
);
const modalSelectorContent = fs.readFileSync(modalSelectorPath).toString('utf-8');
fs.writeFileSync(
  modalSelectorPath,
  modalSelectorContent
    .replace(/ViewPropTypes.style/g, 'PropTypes.object')
    .replace(/Text.propTypes.style/g, 'PropTypes.object'),
);
