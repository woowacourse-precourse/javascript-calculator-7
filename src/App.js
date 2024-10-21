import { Console } from '@woowacourse/mission-utils';
import { CALCULATER, ERROR_MESSAGES } from './constants/Message.js';
import { SYMBOL } from './constants/Symbol.js';
import calculate from './Calculator.js';
import validator from './Validator.js';
import parseCustomDelimiter from './CustomDelimiter.js';

class App {
  async run() {
    const userInputValue = await Console.readLineAsync(CALCULATER.input_prompt);

    if (userInputValue.trim() === SYMBOL.empty) {
      Console.print(CALCULATER.empty_result);
      return;
    }

    const defaultDelimiter = SYMBOL.default_delimiter;
    let separatedValue;

    if (userInputValue.startsWith(SYMBOL.custom_delimiter_prefix)) {
      const { escapedDelimiter, remainingValue } =
        parseCustomDelimiter(userInputValue);
      const customDelimiter = new RegExp(`[${escapedDelimiter}]`);
      separatedValue = remainingValue.split(customDelimiter);
    } else {
      separatedValue = userInputValue.split(defaultDelimiter);
    }

    validator(separatedValue);

    const convertedNumbers = separatedValue.map(Number);
    const calculatedResult = calculate(convertedNumbers);

    Console.print(CALCULATER.result(calculatedResult));
  }
}

export default App;
