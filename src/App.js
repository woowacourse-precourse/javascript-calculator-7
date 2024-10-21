import { Console } from '@woowacourse/mission-utils';
import InputParser from './InputParser.js';
import Calculator from './Calculator.js';
import Validator from './Validator.js';

class App {
  async run() {

    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");

    const parser = new InputParser(input);
    const numbers = parser.parse();

    const validator = new Validator(numbers);
    validator.validate(); 

    const calculator = new Calculator(numbers);
    const sum = calculator.calculate();

    Console.print(`결과 : ${sum}`);
  }
}

export default App;