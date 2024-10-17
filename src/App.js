import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const userInput = (
      await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n')
    ).trim();

    let defaultSeparator = /[,:]/;

    const userInputSeparate = (userInput) => {
      const customSymbols = /\/\/(.+)\\/;

      if (!customSymbols.test(userInput) && defaultSeparator.test(userInput)) {
        const userInputNumber = userInput.split(defaultSeparator);

        return userInputNumber;
      } else if (userInput.includes('n') && customSymbols.test(userInput)) {
        const inputSplit = userInput.split('n');

        const userCustomSymbols = inputSplit[0];
        const reCustomSymbols = userCustomSymbols.replace('//', '');
        const customSeparator = reCustomSymbols.slice(
          0,
          reCustomSymbols.length - 1
        );

        const userInputNumber = inputSplit[1].split(customSeparator);

        return userInputNumber;
      } else {
        throw new Error(ERROR.CUSTOM_SEPERATOR_ERROR);
      }
    };

    const userInputNumber = userInputSeparate(userInput);

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
