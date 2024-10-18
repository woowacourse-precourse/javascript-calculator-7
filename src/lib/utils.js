/**
 *
 * @param {object} regEx
 * @param {string} value
 * @returns {boolean}
 */
export function isMatch(regEx, value) {
  return new RegExp(regEx).test(value);
}

/**
 *
 * @param {string} searchString
 * @param {string} value
 * @returns {boolean}
 */
export function isStartsWith(searchString, value) {
  return value.startsWith(searchString);
}

/**
 *
 * @param {Array | object} object
 * @returns {Array | object}
 */
export function shallowCopy(object) {
  if (Array.isArray(object)) {
    return Object.assign([], object);
  }

  if (typeof object === 'object' && object !== null) {
    return Object.assign({}, object);
  }
}

/**
 *
 * @param {string} value
 * @returns {boolean}
 */
export function isNumericString(value) {
  return !isNaN(value);
}

/**
 *
 * @param {string} value
 * @returns {boolean}
 */
export function isPositiveNumber(value) {
  return Number(value) > 0;
}

/**
 *
 * @param {Array<string>} values
 * @returns {Array<string>}
 */
export function filterEmpty(values) {
  return values.filter((value) => value !== '');
}
