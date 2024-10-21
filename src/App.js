import { MissionUtils } from "@woowacourse/mission-utils";
import { IO_MESSAGES, ERROR_MESSAGES, throwError } from "./constants.js";

class App {
  async run() {
    const Console = MissionUtils.Console;
    const separators = [',', ':'];
    const banSeparators = ['', '.'];
    let isMinus = false;
    let isBigNum = false;

    let userInput = await Console.readLineAsync(IO_MESSAGES.INPUT_MESSAGE);

    while (userInput.startsWith('//')) {
      const end = userInput.indexOf('\\n');
      if (end === -1) break;
      const newSeparator = userInput.slice(2, end);

      // 사용자의 의도를 해치는 경우 에러 발생
      if (banSeparators.includes(newSeparator)) {
        throwError(ERROR_MESSAGES.INVALID_SEPARATOR);
      };
      if (newSeparator.trim() != '' && !isNaN(newSeparator)) {
        throwError(ERROR_MESSAGES.NUMERIC_SEPARATOR);
      }

      separators.push(newSeparator);
      userInput = userInput.slice(end + 2);
    }

    if (isNaN(userInput[0])) {
      throwError(ERROR_MESSAGES.INVALID_START);
    }

    [...userInput].forEach((char, index) => {
      if (isNaN(char) && isNaN(userInput[index - 1])) {
        throwError(ERROR_MESSAGES.MULTIPLE_SEPARATORS);
      }
    });

    const stringNumbers = separators.reduce((acc, separator) => {
      return acc.flatMap(item => item.split(separator));
    }, [userInput]);

    const intNumbers = stringNumbers.map(num => {
      const intNum = Number(num);
      if (intNum < 0) isMinus = true;
      if (num.length >= 16) isBigNum = true;
      return intNum;
    });

    if (isMinus) {
      throwError(ERROR_MESSAGES.NEGATIVE_NUMBER);
    }

    const addTwoNum = (num1, num2) => {
      let carry = 0;
      let result = '';

      while (num1.length < num2.length) num1 = '0' + num1;
      while (num2.length < num1.length) num2 = '0' + num2;

      for (let i = num1.length - 1; i >= 0; i--) {
        const sum = parseInt(num1[i]) + parseInt(num2[i]) + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;
      }

      if (carry > 0) result = carry + result;

      return result;
    }

    const resultSum = isBigNum? stringNumbers.reduce((acc, num) => addTwoNum(acc,num), '0') : intNumbers.reduce((acc, num) => acc + num, 0);

    if (isNaN(resultSum)) {
      throwError(ERROR_MESSAGES.INVALID_RESULT);
    } else {
      Console.print(`${IO_MESSAGES.OUTPUT_MESSAGE}${resultSum}`);
      return;
    }
  }
}

export default App;