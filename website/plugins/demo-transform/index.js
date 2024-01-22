const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const types = require('@babel/types');
const prettier = require('prettier');

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
  let title = '';
  let description = '';
  traverse(ast, {
    ImportDeclaration({ node }) {
      let isBoxImported = false;
      let isProviderImported = false;
      if (node.source.value === '@shuttle-ui/components') {
        node.specifiers.forEach((s) => {
          if (s.imported.name === 'Box') {
            isBoxImported = true;
          } else if (s.imported.name === 'ShuttleUIProvider') {
            isProviderImported = true;
          }
        });

        if (!isBoxImported) {
          node.specifiers.push(getImportSpecifier('Box'));
        }
        if (!isProviderImported) {
          node.specifiers.push(getImportSpecifier('ShuttleUIProvider'));
        }
      }
    },
    ExportNamedDeclaration({ parent, node }) {
      let needRemove = false;
      node.declaration.declarations.forEach((d) => {
        if (d.id.name === 'Title') {
          title = d.init.value;
          needRemove = true;
        } else if (d.id.name === 'Description') {
          description = d.init.value;
          needRemove = true;
        }
      });
      if (needRemove) {
        parent.body.splice(parent.body.indexOf(node), 1);
      }
    },
    enter(path) {},
  });
  return { title, description };
};

const endingTemplate = `
export default () => {
  return (
    <ShuttleUIProvider>
      <Box flex={1} center>
        <Example/>
      </Box>
    </ShuttleUIProvider>
  )
}
`;

const transformDemoToDocExample = (code) => {
  const ast = parse(code, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript'],
  });
  const { title, description } = transform(ast);
  const output = generate(ast);
  const finalTemplate = output.code + '\n' + endingTemplate;
  return {
    title,
    description,
    content: prettier.format(finalTemplate, { parser: 'babel' }),
  };
};

module.exports = {
  transformDemoToDocExample,
};
