import { CUSTOM_DELIMITER, ERROR, GROUPING_REGEX, NEED_ESCAPE_CHARS } from './constants.js';
class InputParser {
  #delimiterSet;

  constructor() {
    this.#delimiterSet = new Set([',', ':']);
  }

  parse(input) {
    const { customDelimiters, expression } = InputParser.#getParts(input);
    this.#addDelimiters(customDelimiters);
    const numbers = this.#expressionToNumber(expression);

    return numbers;
  }

  static #getParts(input) {
    const { customDelimiters, expression } = input.match(GROUPING_REGEX).groups;
    if (
      !customDelimiters
      && (input.startsWith(CUSTOM_DELIMITER.START)
      || input.includes(CUSTOM_DELIMITER.END))
    ) {
      throw new Error(`${ERROR.HEADER} 커스텀 구분자의 형식이 바르지 않습니다.`);
    }

    return { customDelimiters, expression };
  }

  #addDelimiters(customDelimiter) {
    if (!customDelimiter) {
      return;
    }
    if (customDelimiter.length === 0) {
      throw new Error(`${ERROR.HEADER} ${ERROR.MISSING_CUSTOM_DELIMITER}`);
    }
    Array.from(customDelimiter).forEach(this.#addDelimiter.bind(this));
  }

  #addDelimiter(delimiter) {
    if (NEED_ESCAPE_CHARS.some(char => char === delimiter)) {
      return this.#delimiterSet.add(`\\${delimiter}`);
    }

    return this.#delimiterSet.add(delimiter);
  }

  #expressionToNumber(expresssion) {
    if (!expresssion) {
      return [0];
    }
    const splitedExpression = expresssion.split(this.#getSplitRegex());
    const numbers = splitedExpression.reduce((result, curr) => {
      if (curr === '') {
        return result;
      }
      const num = InputParser.#parseNumber(Number(curr));

      return [...result, num];
    }, []);

    return numbers;
  }

  static #parseNumber(curr) {
    if (isNaN(curr)) {
      throw new Error(`${ERROR.HEADER} ${ERROR.EXPRESSION_HAS_INVALID_CHARARACTER}`);
    }
    if (curr <= 0) {
      throw new Error(`${ERROR.HEADER} ${curr}${ERROR.INCOREECT_NUMBER}`);
    }

    return curr;
  }

  #getSplitRegex() {
    return new RegExp(`[${Array.from(this.#delimiterSet).join('')}]`);
  }
}

export default InputParser;
