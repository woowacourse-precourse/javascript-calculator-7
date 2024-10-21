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

    const sumCaculator = (userInputNumber) => {
      let sum = 0;

      for (let i = 0; i < userInputNumber.length; i++) {
        sum += parseInt(userInputNumber[i]);
      }

      return sum;
    };

    const caculator = (userInputNumber) => {
      const caculation = sumCaculator(userInputNumber);

      return caculation;
    };

    Console.print('결과 : ' + caculator(userInputNumber));
  }
}

export default App;
