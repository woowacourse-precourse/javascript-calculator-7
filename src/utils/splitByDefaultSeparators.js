import REGEX from '../constants/regex.js';

export default function splitByDefaultSeparators(str) {
  return str.split(REGEX.DEFAULT_SEPARATOR);
}
