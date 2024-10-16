/**
 *
 * @param {object} regEx
 * @param {string} value
 * @returns {boolean}
 */
export function isMatch(regEx, value) {
  return new RegExp(regEx).test(value);
}
