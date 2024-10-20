import { Console } from '@woowacourse/mission-utils';
import Input from './input.js';
import Parser from './parser.js';

class Calculator {
  static async calculate() {
    const inputValue = await Input.getInputValue();

    const { parsedString, delimiterRegex } = Parser.parseDelimiter(inputValue);
    const operands = Parser.parseOperands(parsedString, delimiterRegex);

    const result = Calculator.getSum(operands);
    Console.print(`결과 : ${result}`);
  }

  static getSum(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
}

export default Calculator;
