/* eslint-disable no-undef */
const resolveTailwindConfig = require('./resolve-tailwind.config');

const brandFilter = (token) => ['colors', 'fontFamily', 'fontWeight'].includes(token.attributes.category);

/** BUILD A STYLE DICTIONARY */
function getStyleDictionaryConfig(brand) {
    const buildPath =  {
        web: 'build/web/',
        storybook: 'build/storybook/',
        ios: 'build/ios/',
        android: 'build/android/',
    }
    const tokens = resolveTailwindConfig(brand);
    const filter = (brand === 'globals') ? '' : brandFilter;
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
                        filter,
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
                        filter,
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
                        filter,
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