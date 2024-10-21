import getInputString from './input/getUserInput.js';
import { cleanStringAfterDelimiter, getCustomDelimiter } from './input/CustomDelimiterHandler.js';
import splitByDelimiters from './parser/splitByDelimiters.js';
import checkInputValidity from './input/checkInputValidity.js';
import calculateSum from './calculater/calculateSum.js';
import printResult from './output/output.js';


class App {
  async run() {
    let input = await getInputString();

    let cleanedString = input;
    const customDelimiter = getCustomDelimiter(input);
    if (customDelimiter !== null) {
      cleanedString = cleanStringAfterDelimiter(input);
    }

    checkInputValidity(cleanedString, customDelimiter);

    const parsedNumberList = splitByDelimiters(cleanedString, customDelimiter);
    const sum = calculateSum(parsedNumberList);

    printResult(sum);

  }
}

export default App;
