class Calculator {
  /**
    *
    * @param {string} text - "//"로 시작하는 커스텀 구분자들의 문자열
    * @returns {string[]}
    */
  findCustomSeparator(text) {
    if (!text) return [];
    return [...new Set(text.split("//").slice(1))];
  }

  /**
    *
    * @param {string} text
    * @param {string} customSeparator
    * @returns {number[]}
    */
  splitNumbers(text, customSeparator) {
    const regex = new RegExp(`,|:|${customSeparator}`);
    return text.split(regex).map(Number);
  }

  /**
   *
   * @param {number[]} numbers
   * @returns {number}
   */
  sum(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
}

export default Calculator;
