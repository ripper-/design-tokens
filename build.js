const StyleDictionaryPackage = require('./configs/style-dictionary-package.config');
const getStyleDictionaryConfig = require('./configs/style-dictionary.config');
const brands = ['bs'];

/* Build All StyleDictionary Platforms from Tailwind Config */
console.log('Build started...');
console.log('\n======================================');
brands.forEach(brand => {
    StyleDictionaryPackage
        .extend(getStyleDictionaryConfig(brand))
        .buildAllPlatforms();
});

console.log('\n======================================');
console.log('\nBuild completed!');