/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    // https://eslint.vuejs.org/rules/component-name-in-template-casing.html
    // always use kebab case for html tag.
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: false,
      },
    ],
    // https://eslint.vuejs.org/rules/html-self-closing.html
    // never use /> for html tag and vue component, leave void self closing to prettier.
    'vue/html-self-closing': [
      'error',
      {
        html: { normal: 'never', void: 'always' },
      },
    ],
    'prefer-const': 'error',
    'no-unused-vars': 'warn',
  },
}
