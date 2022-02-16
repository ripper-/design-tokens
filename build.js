const StyleDictionaryPackage = require('style-dictionary');
const getStyleDictionaryConfig = require('./style-dictionary.config');

console.log('Build started...');
console.log('\n======================================');
const brands = ['globals', 'atc', 'csf'];
brands.forEach(brand => {
    StyleDictionaryPackage
        .extend(getStyleDictionaryConfig(brand))
        .buildAllPlatforms();
});

console.log('\n======================================');
console.log('\nBuild completed!');