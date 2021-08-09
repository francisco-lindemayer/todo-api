module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@controllers': './src/controllers/*',
        '@database': './src/database/*',
        '@middlewares': './src/middlewares/*',
        '@models': './src/models/*',
        '@routes': './src/routes/*',
        '@utils': './src/utils/*',
        '@validators': './src/validators/*'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
