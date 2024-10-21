import { Console } from '@woowacourse/mission-utils';
import { ERROR } from './constants.js';

class App {
  async run() {
    const userInput = (
      await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n')
    ).trim();

    const CUSTOM_EXPRESS = /\/\/(.+)\\/;
    const DEFAULT_SEPARATOR = /[,:]/;
    const FORMULA = /(\d+([\W_][?!\W_]))*\d+$/;

    function userInputCustom(userInput) {
      const inputSplit = userInput.split('n');

      const userInputCustomFormula = inputSplit[1];

      // ERROR
      if (!FORMULA.test(userInputCustomFormula)) {
        throw new Error(ERROR.FORMULA_ERROR);
      }

      const userInputCustomExpress = inputSplit[0];

      const deleteSlash = userInputCustomExpress.replace('//', '');
      const userInputCustomSeparator = deleteSlash.slice(
        0,
        deleteSlash.length - 1
      );
      Console.print(userInputCustomSeparator);

      // ERROR
      if (/\d+/.test(userInputCustomSeparator)) {
        throw new Error(ERROR.CUSTOM_SEPERATOR_ERROR);
      }

      return { userInputCustomFormula, userInputCustomSeparator };
    }

    function userInputNumber(userInput) {
      if (!CUSTOM_EXPRESS.test(userInput)) {
        if (!DEFAULT_SEPARATOR.test(userInput)) {
          throw new Error(ERROR.FORMULA_ERROR);
        }

        if (!FORMULA.test(userInput)) {
          throw new Error(ERROR.FORMULA_ERROR);
        }

        const inputNumber = userInput.split(DEFAULT_SEPARATOR);
        Console.print(inputNumber);

        return inputNumber;
      } else if (userInput.includes('n') && CUSTOM_EXPRESS.test(userInput)) {
        const { userInputCustomSeparator, userInputCustomFormula } =
          userInputCustom(userInput);
        const combinedSeparator = new RegExp(`[,:${userInputCustomSeparator}]`);

        if (!FORMULA.test(userInputCustomFormula)) {
          throw new Error(ERROR.FORMULA_ERROR);
        }

        const inputNumber = userInputCustomFormula.split(combinedSeparator);
        Console.print(inputNumber);

        return inputNumber;
      } else {
        throw new Error('[ERROR]' + error.message);
      }
    }

    function sumCaculator(inputNumber) {
      inputNumber.forEach((number) => {
        if (/[^0-9\s-]/.test(number)) {
          throw new Error(ERROR.SEPARATOR_ERROR);
        }
      });

      let sum = 0;

      for (let i = 0; i < inputNumber.length; i++) {
        let currentNumber =
          inputNumber[i].trim() === '' ? '0' : inputNumber[i].trim();

        let num = parseInt(currentNumber, 10);

        Console.print(num);

        if (num < 0) {
          throw new Error(ERROR.NEGATIVE_NUMBER_ERROR);
        }

        sum += num;
      }

      return sum;
    }

    const caculator = (userInputNumber) => {
      const caculation = sumCaculator(userInputNumber);

      return caculation;
    };

    Console.print('결과 : ' + caculator(userInputNumber));
  }
}

export default App;
