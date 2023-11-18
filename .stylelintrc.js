module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-order'],
  rules: {
    'import-notation': 'string',
    'selector-class-pattern': null,
    'at-rule-empty-line-before': null,
    'at-rule-no-unknown': null,
    'length-zero-no-unit': true,
    'shorthand-property-no-redundant-values': true,
    'declaration-block-no-duplicate-properties': true,
    'no-descending-specificity': true,
    'selector-max-id': null,
    'max-nesting-depth': 10,
    'declaration-block-single-line-max-declarations': 1,
    'selector-max-type': [0, { ignore: ['child', 'descendant', 'compounded'] }],
    'order/order': [
      'custom-properties',
      'dollar-variables',
      'declarations',
      'rules',
      'at-rules',
    ],
    'order/properties-order': [],
  },
  overrides: [
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['*.less', '**/*.less'],
      customSyntax: 'postcss-less',
    },
  ],
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
};
