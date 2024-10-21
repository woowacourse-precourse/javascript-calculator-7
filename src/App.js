import getInputString from './input/getUserInput.js';
import { cleanStringAfterDelimiter, getCustomDelimiter } from './input/CustomDelimiterHandler.js';
import splitByDelimiters from './parser/splitByDelimiters.js';
import isValidInput from './input/isValidInput.js';
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
    this.checkValidInput(cleanedString, customDelimiter);
    const parsedNumberList = splitByDelimiters(cleanedString, customDelimiter);
    const sum = calculateSum(parsedNumberList);
    printResult(sum);
  }

  checkValidInput(cleanedString, customDelimiter) {
    if (!isValidInput(cleanedString, customDelimiter)) {
      throw new Error("[ERROR] : [,][;][커스텀 구분자][숫자 문자]를 제외한 입력이 존재합니다!");
    }
  }
}

export default App;
