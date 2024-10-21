import { DELIMITERS, MESSAGES } from './constants.js';

export default class InputParser {
  parse(input) {
    let delimiter = DELIMITERS.DEFAULT;
    let numbers = input;

    if (input.startsWith(DELIMITERS.CUSTOM_PREFIX)) {
      const customDelimiterMatch = input.match(new RegExp(`^${this.escapeRegExp(DELIMITERS.CUSTOM_PREFIX)}(.+)${this.escapeRegExp(DELIMITERS.CUSTOM_SUFFIX)}(.*)$`));
      if (!customDelimiterMatch) {
        throw new Error(MESSAGES.ERROR_PREFIX + MESSAGES.INVALID_INPUT);
      }
      delimiter = new RegExp(this.escapeRegExp(customDelimiterMatch[1]));
      numbers = customDelimiterMatch[2];
    }

    return { numbers, delimiter };
  }

  escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}