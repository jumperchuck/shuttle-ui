const fs = require('fs');
const path = require('path');
const { transformDemoToDocExample } = require('../demo-transform');

const rootPath = path.resolve(__dirname, '../../../');

const getSnackPlayerCode = (filePath) => {
  const fileContent = fs.readFileSync(path.join(rootPath, filePath), {
    encoding: 'utf-8',
  });
  if (filePath.includes('demo/')) {
    return transformDemoToDocExample(fileContent);
  }
  return { content: fileContent };
};

module.exports = {
  getSnackPlayerCode,
};
