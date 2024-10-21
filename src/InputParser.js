import { CUSTOM_DELIMITER, ERROR, GROUPING_REGEX, NEED_ESCAPE_CHARS } from "./constants.js";


class InputParser {
  #delimiterSet = new Set([",", ":"]);

  constructor() {}

  /**
   * 
   * @param {string} input 
   * @returns {number[]} numbers
   */
  parse(input) {
    const { customDelimiters, expression } = this.getParts(input);
    this.#addDelimiters(customDelimiters);
    const numbers = this.#expressionToNumber(expression);
    return numbers;
  }

  /**
   *
   * @param {string} input
   * @returns {{customDelimiters:string, expression:string }} Regex Matched Group
   */
  getParts(input) {
    const { customDelimiters, expression } = input.match(GROUPING_REGEX).groups;
    if (!customDelimiters && (input.startsWith(CUSTOM_DELIMITER.START) || input.includes(CUSTOM_DELIMITER.END)))
      throw new Error(`${ERROR.HEADER} 커스텀 구분자의 형식이 바르지 않습니다.`);
    return { customDelimiters, expression };
  }

  /**
   *
   * @param {string} customDelimiters
   * @returns void
   */
  #addDelimiters(customDelimiter) {
    if (!customDelimiter) return;
    if (customDelimiter.length === 0)
      throw new Error(`${ERROR.HEADER} ${ERROR.MISSING_CUSTOM_DELIMITER}`);
    Array.from(customDelimiter).forEach(this.#addDelimiter.bind(this));
  }

  /**
   * @private
   * @param {string} delimiter
   * @returns {Set<string>} delimiterSet
   */
  #addDelimiter(delimiter) {
    if (NEED_ESCAPE_CHARS.some((char) => char === delimiter)) {
      return this.#delimiterSet.add(`\\${delimiter}`);
    }
    return this.#delimiterSet.add(delimiter);
  }

  /**
   * 
   * @param {string | undefined} expresssion 
   * @returns {number[]} 
   */
  #expressionToNumber(expresssion) {
    if (!expresssion) return [0];
    const splitedExpression = expresssion.split(this.#getSplitRegex());
    const numbers = splitedExpression.reduce((result, curr) => {
      if (curr === "") return result;
      const num = this.#parseNumber(Number(curr));
      return [...result, num];
    }, []);
    return numbers;
  }

  #parseNumber(curr){
    if (isNaN(curr))
        throw new Error(`${ERROR.HEADER} ${ERROR.EXPRESSION_HAS_INVALID_CHARARACTER}`);
    if (curr <= 0)
      throw new Error(`${ERROR.HEADER} ${curr}${ERROR.INCOREECT_NUMBER}`);
    return curr;
  }

  #getSplitRegex() {
    return new RegExp(`[${Array.from(this.#delimiterSet).join("")}]`);
  }
}


export default InputParser;