import REGEX from '../constants/regex.js';

export default function hasNegative(str) {
  return REGEX.NEGATIVE_INTEGER.test(str);
}
