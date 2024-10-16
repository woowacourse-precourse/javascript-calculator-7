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
