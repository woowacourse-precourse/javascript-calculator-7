import CalculatorService from './CalculatorService.js';
import { inputText, printSumResult } from './ioUtil.js';

class App {
  async run() {
    const userInput = await inputText();

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
