const path = require('path');

module.exports = {
  title: 'Suomifi-ui-components',
  components: 'src/core/**/[A-Z]*.tsx',
  ignore: ['**/*basestyles.tsx', '**/*baseStyles.tsx', '**/*test.tsx'],
  webpackConfig: require('./webpack.config.js'),
  require: [path.join(__dirname, '.styleguidist/styleguidist.require.js')],
  assetsDir: path.join(__dirname, '.styleguidist/assets'),
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  propsParser: require('react-docgen-typescript').withDefaultConfig({
    propFilter: { skipPropsWithoutDoc: true },
  }).parse,
  exampleMode: 'expand',
  usageMode: 'expand',
  pagePerSection: true,
  skipComponentsWithoutExample: true,
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700',
        },
      ],
    },
  },
  theme: {
    fontFamily: {
      base: '"Source Sans Pro", sans-serif',
    },
  },
  styles: require('./.styleguidist/styleguidist.styles.js'),
};
