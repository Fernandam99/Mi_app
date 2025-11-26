module.exports = function (api) {
  api.cache(true);
  return {
    presets: [['babel-preset-expo', { jsxPragma: 'React' }], 'nativewind/babel'],
    plugins: [
      ['@babel/plugin-transform-runtime', {
        helpers: true,
        regenerator: true,
      }]
    ],
  };
};
