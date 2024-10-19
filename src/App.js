import Validator from './Validator';
import printMessage from './print-message';
import Separator from './Separator';
import userInput from './user-input';
import calculateSum from './calculate';
import { PROMPT_USER_INPUT, RESULT_MESSAGE } from './constant';

class App {
  async run() {
    const input = await userInput(PROMPT_USER_INPUT);

    const separator = new Separator(input);
    const value = separator.separate();

    Validator.validatePositiveNumbers(value);
    printMessage(RESULT_MESSAGE + calculateSum(value));
  }
}

export default App;
