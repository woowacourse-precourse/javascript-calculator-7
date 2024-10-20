import CalculatorService from './CalculatorService.js';
import { inputText, printSumResult } from './util/ioUtil.js';

class App {
  async run() {
    const userInput = await inputText();
    if (userInput === '') {
      printSumResult(0);
      return;
    }

    CalculatorService.validateUserInput(userInput);

    const { customSeparator, processedUserInput } =
      CalculatorService.parseUserInput(userInput);

    const sumResult = CalculatorService.sumUserInput(
      processedUserInput,
      customSeparator,
    );

    printSumResult(sumResult);
  }
}

export default App;
