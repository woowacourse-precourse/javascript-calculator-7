class Calculator {
  /**
    *
    * @param {string} text - 입력으로 주어진 문자열
    * @returns {{customSeparator: string[], numbers: string}}
    */
  findCustomSeparatorAndNumbers(text) {
    const customSeparatorAndNumbers = text.split("\n");
    // TODO: 원본 배열을 건드는 게 바람직한 일일까?
    const numbers = customSeparatorAndNumbers.pop();
    return { customSeparator: customSeparatorAndNumbers, numbers };
  }

  /**
    *
    * @param {string[]} separators - "//"로 시작하는 커스텀 구분자들의 문자열 배열
    * @returns {string[]}
    */
  findCustomSeparator(separators) {
    if (!separators.length) return [];
    return [...new Set(separators.map((sep) => sep.split("//")[1]))];
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
