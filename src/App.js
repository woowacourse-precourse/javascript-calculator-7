import { Console } from '@woowacourse/mission-utils';

import Calculator from './Calculator/Calculator.js';

class App {
  async run() {
    const input = await Console.readLineAsync(
      `덧셈할 문자열을 입력해 주세요.\n`
    );
    const calculator = new Calculator();

    const extraSeperator = calculator.hasCustomPrefixSeparator(input)
      ? calculator.extractSeparator(input)
      : undefined;

    const string = input.replace(/^\/\/.+\\n/, '');
    const array = calculator.convertArray(string, extraSeperator);

    calculator.validate(array);

    const result = array.reduce((acc, num) => acc + Number(num), 0);
    Console.print(`결과 : ${result}`);
  }
}

export default App;
