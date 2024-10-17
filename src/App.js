import ErrorHandler from './ErrorHandler';
import printMessage from './print-message';
import Separator from './Separator';
import userInput from './user-input';
import calculateSum from './calculate';

class App {
  async run() {
    try {
      const input = await userInput();

      const separator = new Separator(input);
      const value = separator.separate();

      ErrorHandler.validatePositiveNumbers(value);
      printMessage(calculateSum(value));
    } catch (error) {
      printMessage(error.message);
    }
  }
}

export default App;
