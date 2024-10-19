import { DEFAULT_DELIMITER } from '../constants/delimiter.js';

class InputParser {
  parse(input) {
    return this.parseValidatedInput(input);
  }

  parseValidatedInput(input) {
    const customDelimiter = this.extractCustomDelimiter(input);
    if (customDelimiter) {
      const [, numbersPart] = input.split('\\n');
      return numbersPart.split(customDelimiter).map(Number);
    }
    return input.split(DEFAULT_DELIMITER).map(Number);
  }

  extractCustomDelimiter(input) {
    if (input.startsWith('//')) {
      const delimiter = input.indexOf('\\n');
      return input.substring(2, delimiter);
    }
    return null;
  }
}

export default InputParser;
