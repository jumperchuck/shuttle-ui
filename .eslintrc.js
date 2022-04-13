module.exports = {
  extends: '@react-native-community',
  globals: {
    ShuttleUI: true,
  },
  rules: {
    curly: 'off',
    'react-hooks/exhaustive-deps': [
      0,
      {
        additionalHooks: '(usePrivateState|useForceUpdate)',
      },
    ],
  },
};
