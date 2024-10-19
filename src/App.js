import { Console } from "@woowacourse/mission-utils";
import StringValidator from './StringValidator.js';
import StringParsing from './StringParsingUtils.js';
import StringCalculatorUtils from './StringCalculatorUtils.js'

const validator = new StringValidator();
const parsing = new StringParsing();
const calculator = new StringCalculatorUtils;

class App {
  async run() {
    try {
      const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
      const result = stringCalculator(input);
      Console.print(`결과 : ${result}`);
    }
    catch (error) {
      Console.print(`${error.message}`)
    }
  }
}

function stringCalculator(input) {

  checkingProcessBeforeParsing(input);

  const { parsedArray, customDelimiter } = parsing.parsing(input);

  checkingProcessAfterParsing(parsedArray, customDelimiter);

  var resultNumArray = calculator.convertNumArray(parsedArray);

  const resultSum = calculator.calculateSum(resultNumArray);

  return resultSum;

}

function checkingProcessBeforeParsing(input) {
  validator.checkEmptyString(input)
  validator.checkCustomDelimiterPosition(input);
  validator.checkMultipleDeclareCustomDelimiter(input);
}

function checkingProcessAfterParsing(parsedArray, customDelimiter) {
  validator.checkMultipleDelimiter(parsedArray, customDelimiter);
  validator.checkIncludesNonNumber(parsedArray);
  validator.checkNegativeNumbers(parsedArray);
}

export default App;
