const NEED_ESCAPE_CHARS = ["[","]", "{","}","*", "+", "?", "|", "^", "$", ".", "\\"];

class InputParser {
  #delimiterSet = new Set([",", ":"]);

  constructor() {}

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
    const GROUPING_REGEX =
      /^(\/\/(?<customDelimiters>.*)\\n)?(?<expression>.*)$/;
    const { customDelimiters, expression } = input.match(GROUPING_REGEX).groups;
    if (!customDelimiters && (input.startsWith("//") || input.includes("\\n")))
      throw new Error("[ERROR] 커스텀 구분자의 형식이 바르지 않습니다.");
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
      throw new Error(
        "[ERROR] 커스텀 구분자 형식이 들어왔지만,커스텀 구분자가 들어오지 않았습니다."
      );
    Array.from(customDelimiter).forEach(this.#addDelimiter.bind(this));
  }

  /**
   *
   * @param {string} delimiter
   * @returns void
   */
  #addDelimiter(delimiter) {
    if (NEED_ESCAPE_CHARS.some((char) => char === delimiter)) {
      return this.#delimiterSet.add(`\\${delimiter}`);
    }
    return this.#delimiterSet.add(delimiter);
  }

  #expressionToNumber(expresssion) {
    if (!expresssion) return [0];
    const expressionTestRegex = this.#expressionTestRegex();
    if (!expressionTestRegex.test(expresssion))
      throw new Error("[ERROR] 들어온 식에 문제가 있습니다.");
    return expresssion.split(this.#getSplitRegex()).reduce((result, curr) => {
      if (curr === "") return result;
      if (isNaN(Number(curr)))
        throw new Error(`[ERROR] ${curr}은 주어진 식에 유요하지 않은 문자입니다.`);
      if (Number(curr) <=0)
        throw new Error(`[ERROR] ${curr}은 양수가 아닙니다.`);
      return [...result, Number(curr)];
    }, []);
  }

  #expressionTestRegex() {
    return new RegExp(`(${Array.from(this.#delimiterSet).join("|")}|\d+)*`);
  }

  #getSplitRegex() {
    return new RegExp(`[${Array.from(this.#delimiterSet).join("")}]`);
  }
}


export default InputParser;