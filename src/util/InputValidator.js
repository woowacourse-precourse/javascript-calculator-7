import { ErrorMessage, Delimiter, StaticNumber } from '../domain/Constants.js';

const InputValidator = {
  validateInputString(inputString) {
    if (!inputString || inputString.trim() === '') {
      return [StaticNumber.INITIAL_SUM];
    }

    let delimiters = [...Delimiter.DEFAULT];
    let newInputString = inputString;

    if (this.hasCustomDelimiter(inputString)) {
      delimiters = this.getCustomDelimiters(inputString, delimiters);
      newInputString = this.stripCustomDelimiterPart(inputString);
    }

    this.validateString(newInputString, delimiters);
    const stringArray = this.splitByDelimiters(newInputString, delimiters);
    return this.parseNumbers(stringArray);
  },

  hasCustomDelimiter(inputString) {
    return inputString.startsWith(Delimiter.CUSTOM_PREFIX) && inputString.includes(Delimiter.CUSTOM_SUFFIX);
  },

  getCustomDelimiters(inputString, delimiters) {
    const customDelimiter = inputString[Delimiter.CUSTOM_PREFIX.length];
    return [...delimiters, customDelimiter];
  },

  stripCustomDelimiterPart(inputString) {
    return inputString.substring(inputString.indexOf(Delimiter.CUSTOM_SUFFIX) + Delimiter.CUSTOM_SUFFIX.length);
  },

  validateString(inputString, delimiters) {
    for (const char of inputString) {
      if (char === ' ') {
        throw new Error(ErrorMessage.WHITESPACE);
      }
      if (isNaN(char) && !delimiters.includes(char)) {
        throw new Error(ErrorMessage.INVALID_CHARACTER);
      }
    }
  },

  splitByDelimiters(inputString, delimiters) {
    let currentToken = '';
    const tokens = [];

    for (const char of inputString) {
      if (delimiters.includes(char)) {
        if (currentToken !== '') {
          tokens.push(currentToken);
          currentToken = '';
        }
      } else {
        currentToken += char;
      }
    }

    if (currentToken !== '') {
      tokens.push(currentToken);
    }

    return tokens;
  },

  parseNumbers(stringArray) {
    return stringArray.map(str => {
      if (str.includes(' ')) {
        throw new Error(ErrorMessage.WHITESPACE);
      }
      const num = Number(str);
      if (isNaN(num)) {
        throw new Error(ErrorMessage.INVALID_NUMBER);
      }
      if (num < 0) {
        throw new Error(ErrorMessage.NEGATIVE_NUMBER);
      }
      return num;
    });
  }
};

export default InputValidator;