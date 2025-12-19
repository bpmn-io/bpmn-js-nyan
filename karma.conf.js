/* eslint-env node */

// configures browsers to run test against
// any of [ 'ChromeHeadless', 'Chrome', 'Firefox' ]
var browsers = (process.env.TEST_BROWSERS || 'ChromeHeadless').split(',');

// use puppeteer provided Chrome for testing
process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function(karma) {
  karma.set({

    frameworks: [
      'webpack',
      'mocha'
    ],

    files: [
      'test/spec/**/*Spec.js',
    ],

    reporters: [ 'dots' ],

    preprocessors: {
      'test/spec/**/*Spec.js': [ 'webpack' ]
    },

    browsers,

    browserNoActivityTimeout: 30000,

    singleRun: true,
    autoWatch: false,

    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /TestHelper/,
            sideEffects: true
          },
          {
            test: /\.(css|bpmn)$/,
            type: 'asset/source'
          },
          {
            test: /\.png$/,
            type: 'asset/resource'
          }
        ]
      },
      devtool: 'eval-source-map'
    }
  });
};
