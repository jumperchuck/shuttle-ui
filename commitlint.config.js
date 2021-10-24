module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'perf',
        'style',
        'refactor',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
        'merge',
      ],
    ],
    'subject-case': [0, 'never'],
    'subject-full-stop': [0, 'never'],
  },
};
