import Validator from './Validator';
import printMessage from './util/print-message';
import InputParser from './InputParser';
import userInput from './util/user-input';
import calculateSum from './util/calculate';
import { MESSAGE } from './constant';

class App {
  async run() {
    const input = await userInput(MESSAGE.PROMPT_USER_INPUT);

    const separator = new InputParser(input);
    const value = separator.separate();

    Validator.validatePositiveNumbers(value);
    printMessage(MESSAGE.RESULT + calculateSum(value));
  }
}

export default App;
