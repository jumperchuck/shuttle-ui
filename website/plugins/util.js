const fs = require('fs');
const path = require('path');

const rootPath = path.resolve(__dirname, '../../');

const getSnackPlayerCode = (examplePath) => {
  return fs.readFileSync(path.join(rootPath, examplePath));
};

module.exports = {
  getSnackPlayerCode,
};
