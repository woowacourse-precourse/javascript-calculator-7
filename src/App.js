import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const userInputValue = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n',
    );

    if (userInputValue.trim() === '') {
      Console.print('결과 : 0');
      return;
    }

    const defaultDelimiter = /,|:/;
    let separatedValue;

    if (userInputValue.startsWith('//')) {
      const formattedInput = userInputValue.replace(/\\n/, '\n');
      const delimiterBoundary = formattedInput.indexOf('\n');

      if (delimiterBoundary === -1) {
        throw new Error('[ERROR] 커스텀 구분자가 잘못 입력되었습니다.');
      }

      const extractedDelimiter = formattedInput
        .substring(2, delimiterBoundary)
        .trim();

      if (!extractedDelimiter) {
        throw new Error('[ERROR] 커스텀 구분자가 입력되지 않았습니다.');
      }

      if (extractedDelimiter.length !== 1) {
        throw new Error('[ERROR] 커스텀 구분자는 한 글자여야 합니다.');
      }

      const escapedDelimiter = extractedDelimiter.replace(
        /[.*+?^${}()|[\]\\]/g,
        '\\$&',
      );
      const remainingValue = formattedInput.substring(delimiterBoundary + 1);

      const customDelimiter = new RegExp(`[${escapedDelimiter}]`);
      separatedValue = remainingValue.split(customDelimiter);
    } else {
      separatedValue = userInputValue.split(defaultDelimiter);
    }

    separatedValue.forEach(value => {
      if (value.trim() === '') {
        throw new Error('[ERROR] 구분자 사이에 값이 없습니다.');
      }
      const number = Number(value.trim());

      if (Number.isNaN(number)) {
        throw new Error('[ERROR] 숫자가 아닌 값을 입력하시면 안됩니다.');
      }

      if (number <= 0) {
        throw new Error('[ERROR] 양수만 입력할 수 있습니다.');
      }
    });

    const convertedNumbers = separatedValue.map(Number);

    const calculatedResult = convertedNumbers.reduce(
      (prefixNumber, nextNumber) => prefixNumber + nextNumber,
      0,
    );

    Console.print(`결과 : ${calculatedResult}`);
  }
}

export default App;
