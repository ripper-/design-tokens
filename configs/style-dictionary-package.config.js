/* eslint-disable no-throw-literal, max-len, linebreak-style */
const StyleDictionaryPackage = require('style-dictionary');
sizeCategories = [
  'margin', 'padding', 'spacing', 'backdropBlur',
  'borderRadius', 'borderWidth', 'screens', 'gap', 'gutter',
  'container', 'spacing-stack', 'spacing-inline',
  'spacing-inset', 'blur', 'divideWidth', 'flexBasis', 'height', 'width', 'inset',
  'letterSpacing', 'outlineOffset', 'outlineWidth',
  'ringOffsetWidth', 'ringWidth', 'textDecorationThickness', 'textUnderlineOffset',
  'breakpoint', 'minHeight', 'minWidth', 'maxHeight', 'maxWidth', 'fontSize',
  'columns', 'scrollMargin', 'scrollPadding', 'space', 'textIndent', 'translate', 'spacing-squish',
  'boxShadow', 'shadow', 'boxShadowColor', 'dropShadow',
];

StyleDictionaryPackage.registerFilter({
  name: 'isSize',
  matcher: function(token) {
    return isSizes(token);
  },
});

StyleDictionaryPackage.registerTransform({
  name: 'size/pxToRem',
  type: 'value',
  matcher: isPxSizes,
  transformer: function(token, options) {
    const baseFont = getBasePxFontSize(options);
    const values = token.value.split(' ');
    for (let i = 0; i < values.length; i++) {
      if (!values[i].includes('px')) continue;
      const floatVal = parseFloat(values[i]);
      if (isNaN(floatVal)) throwSizeError(token.name, floatVal, 'rem');
      values[i] = `${floatVal / baseFont}rem`;
    };
    return values.join(' ');
  },
});

StyleDictionaryPackage.registerTransform({
  name: 'size/remToDp',
  type: 'value',
  matcher: isRemSizes,
  transformer: function(token, options) {
    const baseFont = getBasePxFontSize(options);
    const values = token.value.split(' ');
    for (let i = 0; i < values.length; i++) {
      if (!values[i].includes('rem')) continue;
      const val = parseFloat(values[i]);
      if (isNaN(val)) throwSizeError(token.name, values[i], 'dp');
      values[i] = (val * baseFont).toFixed(2) + 'dp';
    };
    return values.join(' ');
  },
});

/**
 * Validate if the category contains a size propertie and its rem value
 * @param {*} token the token object
 * @return {boolean} if it contains one of the size category and its rem value
 */
function isRemSizes(token) {
  return isSizes(token) && token.value.toString().includes('rem');
}

/**
 * Validate if the category contains a size propertie and its px value
 * @param {*} token the token object
 * @return {boolean} if it contains one of the size category and its px value
 */
function isPxSizes(token) {
  return isSizes(token) && token.value.toString().includes('px');
}

/**
 * Validate if the category contains a size propertie
 * @param {*} token the token object
 * @return {boolean} if it contains one of the size category
 */
function isSizes(token) {
  return sizeCategories.includes(token.attributes.category);
}

/**
 * Return the Base Font Sizer for conversion
 * @default 16
 * @param {*} options the StyleDictionary Object
 * @return {number} the Base font size
 */
function getBasePxFontSize(options) {
  return (options && options.basePxFontSize) || 16;
}

/**
 * throwSizeError
 * @param {*} name Propertie Name
 * @param {*} value Propertie Value
 * @param {*} unitType Tipo da Unidade
 */
function throwSizeError(name, value, unitType) {
  throw `Invalid Number: '${name}: ${value}' is not a valid number, cannot transform to '${unitType}' \n`;
}

module.exports = StyleDictionaryPackage;
