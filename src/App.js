import Validator from './Validator';
import printMessage from './print-message';
import Separator from './Separator';
import userInput from './user-input';
import calculateSum from './calculate';
import { RESULT_MESSAGE } from './constant';

class App {
  async run() {
    const input = await userInput();

    const separator = new Separator(input);
    const value = separator.separate();

    Validator.validatePositiveNumbers(value);
    printMessage(RESULT_MESSAGE + calculateSum(value));
  }
}

export default App;
