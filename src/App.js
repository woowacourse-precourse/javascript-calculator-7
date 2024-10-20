import Input from './utils/input.js';
import Parser from './utils/parser.js';
import Calculator from './utils/calculator.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const inputValue = await Input.getInputValue();

      const { parsedString, delimiterRegex } = Parser.parseDelimiter(inputValue);
      const operands = Parser.parseOperands(parsedString, delimiterRegex);

      const result = Calculator.getSum(operands);
      Console.print(`결과 : ${result}`);
    } catch (err) {
      throw err;
    }
  }
}

export default App;
