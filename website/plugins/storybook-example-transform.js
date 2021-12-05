const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const prettier = require('prettier');
const prettierrc = require('../../.prettierrc');

const getImportSpecifier = (name) => {
  return {
    type: 'ImportSpecifier',
    imported: {
      type: 'Identifier',
      loc: {
        identifierName: name,
      },
      name: name,
    },
    local: {
      type: 'Identifier',
      loc: {
        identifierName: name,
      },
      name: name,
    },
  };
};

const transform = (ast) => {
  traverse(ast, {
    ImportDeclaration({ node }) {
      let isBoxImported = false;
      let isProviderImported = false;
      if (node.source.value === '@shuttle-ui/components') {
        node.specifiers.forEach((s) => {
          if (s.imported.name === 'Box') {
            isBoxImported = true;
          } else if (s.imported.name === 'Provider') {
            isProviderImported = true;
          }
        });

        if (!isBoxImported) {
          node.specifiers.push(getImportSpecifier('Box'));
        }
        if (!isProviderImported) {
          node.specifiers.push(getImportSpecifier('Provider'));
        }
      }
    },
    enter(path) {},
  });
};

const endingTemplate = `
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

const transformStorybookToDocExample = (code) => {
  const ast = parse(code, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript'],
  });
  transform(ast);
  const output = generate(ast);
  const finalTemplate = output.code + '\n' + endingTemplate;
  return prettier.format(finalTemplate, prettierrc);
};

module.exports = {
  transformStorybookToDocExample,
};
