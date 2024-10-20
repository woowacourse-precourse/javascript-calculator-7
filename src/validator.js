import { NEGATIVE_PATTERN, DEFAULT_PATTERN, CUSTOM_PATTERN } from './regex.js';

export default function validator(input) {
  if (NEGATIVE_PATTERN.test(input)) {
    throw new Error('[ERROR]');
  }

  if (!CUSTOM_PATTERN.test(input)) {
    if (!DEFAULT_PATTERN.test(input)) {
      throw new Error('[ERROR]');
    }
    return input;
  }

  const customPattern = input.match(CUSTOM_PATTERN);
  if (customPattern) {
    const customDelimiter = customPattern[1];
    const exp = input.slice(input.indexOf('\\n') + 2);
    const newPattern = new RegExp(`^[0-9${customDelimiter},:\n]+$`);

    if (!newPattern.test(exp)) {
      throw new Error('[ERROR]');
    }
    return exp;
  }
}
