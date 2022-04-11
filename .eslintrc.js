module.exports = {
  extends: '@react-native-community',
  globals: {
    ShuttleUI: true,
  },
  rules: {
    curly: 'off',
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: 'usePrivateState',
      },
    ],
  },
};
