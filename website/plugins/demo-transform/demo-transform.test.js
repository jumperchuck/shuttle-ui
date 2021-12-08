const fs = require('fs');
const path = require('path');
const { transformDemoToDocExample } = require('./index');

const demoDir = path.resolve(__dirname, '../../../demo');

test('transform demo to doc example', () => {
  const filePath = path.resolve(demoDir, 'button/Basic.tsx');
  const result = transformDemoToDocExample(fs.readFileSync(filePath).toString());
  expect(result.title).toBeDefined();
});
