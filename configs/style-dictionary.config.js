const resolveTailwindConfig = require('./resolve-tailwind.config');

/**
 * BUILD A STYLE DICTIONARY
 * @param {String} brand the brand name
 * @return {String}
 */
function getStyleDictionaryConfig(brand) {
  const buildPath = {
    web: 'build/web/',
    storybook: 'build/storybook/',
    ios: 'build/ios/',
    android: 'build/android/',
  };
  const tokens = resolveTailwindConfig(brand);
  return {
    tokens,
    platforms: {
      web: {
        transformGroup: 'scss',
        buildPath: buildPath.web,
        files: [
          {
            destination: `${brand}-tokens.scss`,
            format: 'scss/variables',
          },
        ],
      },
      ios: {
        transformGroup: 'ios',
        buildPath: buildPath.ios,
        files: [
          {
            destination: `${brand}-tokens.plist`,
            format: 'ios/plist',
          },
        ],
      },
      android: {
        basePxFontSize: 16,
        transforms: [
          'attribute/cti',
          'name/cti/camel',
          'name/cti/kebab',
          'color/hex',
          'size/pxToRem',
          'size/remToDp',
        ],
        buildPath: buildPath.android,
        files: [
          {
            destination: `${brand}-all-tokens.xml`,
            format: 'android/resources',
          },
        ],
      },
      styleguide: {
        transformGroup: 'js',
        buildPath: buildPath.storybook,
        files: [
          {
            destination: `${brand}-tokens.js`,
            format: 'javascript/module',
            options: {
              outputReferences: true,
            },
          },
        ],
      },
    },
  };
}

module.exports = getStyleDictionaryConfig;
