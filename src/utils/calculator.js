import { Console } from '@woowacourse/mission-utils';
import Input from './input.js';
import Parser from './parser.js';

/**
 * 문자열을 파싱하여 숫자의 합을 구하는 클래스입니다.
 */
class Calculator {
  /**
   * 비동기로 입력 값을 받아 파싱 후 연산을 수행합니다.
   * @async
   * @returns {Promise<void>} 파싱된 숫자의 합을 콘솔에 출력합니다.
   */
  static async calculate() {
    const inputValue = await Input.getInputValue();

    const { parsedString, delimiterRegex } = Parser.parseDelimiter(inputValue);
    const operands = Parser.parseOperands(parsedString, delimiterRegex);

    const result = Calculator.getSum(operands);
    Console.print(`결과 : ${result}`);
  }

  /**
   * 숫자 배열의 합을 구합니다.
   * @param {number[]} numbers - 합을 구할 숫자들의 배열입니다.
   * @returns {number} 숫자들의 합을 반환합니다.
   */
  static getSum(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
}

export default Calculator;
