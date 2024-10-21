import { Console } from '@woowacourse/mission-utils';
import {
  ERROR,
  formulaTest,
  separatorTest,
  checkSeparator,
  customSeparateTest,
  customN_TEst,
  checkNumber,
  negativeNumberTest,
} from './Error.js';
import { CUSTOM_EXPRESS, DEFAULT_SEPARATOR } from './constants.js';

class App {
  async run() {
    const userInput = (
      await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n')
    ).trim();

    function userInputCustom(userInput) {
      const inputSplit = userInput.split('n');
      const inputFormula = inputSplit[1];

      formulaTest(inputFormula);

      const inputCustom = inputSplit[0];
      customSeparateTest(inputCustom);

      const deleteSlash = inputCustom.replace('//', '');
      const inputSeparator = deleteSlash.slice(0, deleteSlash.length - 1);

      separatorTest(inputSeparator);

      return { inputFormula, inputSeparator };
    }

    function userInputNumber(userInput) {
      if (
        !CUSTOM_EXPRESS.test(userInput) &&
        DEFAULT_SEPARATOR.test(userInput)
      ) {
        formulaTest(userInput);

        const inputNumber = userInput.split(DEFAULT_SEPARATOR);

        return inputNumber;
      } else if (userInput.includes('n') && CUSTOM_EXPRESS.test(userInput)) {
        const { inputFormula, inputSeparator } = userInputCustom(userInput);
        const combinedSeparator = new RegExp(`[,:${inputSeparator}]`);

        const inputNumber = inputFormula.split(combinedSeparator);
        checkSeparator(inputNumber);

        return inputNumber;
      } else if (userInput) {
        customN_TEst(userInput);
      } else {
        throw new Error(ERROR.ALL_ERROR);
      }
    }

    function sumCaculator(inputNumber) {
      checkNumber(inputNumber);

      let sum = 0;

      for (let i = 0; i < inputNumber.length; i++) {
        let currentNumber =
          inputNumber[i].trim() === '' ? '0' : inputNumber[i].trim();

        let num = parseInt(currentNumber, 10);
        negativeNumberTest(num);

        sum += num;
      }
      return sum;
    }

    try {
      const numbers = userInputNumber(userInput);
      const result = sumCaculator(numbers);

      Console.print('결과 : ' + result);
    } catch (error) {
      throw new Error(ERROR.ALL_ERROR);
    }
  }
}

export default App;
