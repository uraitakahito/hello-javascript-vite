// > Use eslint v8 until such time as our configs support v9.
// https://github.com/airbnb/javascript/issues/2961
// Backwards compatibility utility is available
// https://eslint.org/blog/2022/08/new-config-system-part-2/#backwards-compatibility-utility

module.exports = {
  rules: {
    // https://github.com/pd4d10/vite-plugin-svgr/issues/91
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
    'import/no-unresolved': ['error', { ignore: ['\\.svg$'] }],
  },
};
