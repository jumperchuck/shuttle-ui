const fs = require('fs');
const path = require('path');
const { transformStorybookToDocExample } = require('./storybook-example-transform');

const rootPath = path.resolve(__dirname, '../../');

const getSnackPlayerCode = (filePath) => {
  const fileContent = fs.readFileSync(path.join(rootPath, filePath), {
    encoding: 'utf-8',
  });
  if (filePath.includes('demo/')) {
    return transformStorybookToDocExample(fileContent);
  }
  return fileContent;
};

module.exports = {
  getSnackPlayerCode,
};
