import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const userInputValue = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n',
    );

    if (userInputValue.trim() === '') {
      Console.print(0);
      return;
    }

    const defaultDelimiter = /,|:/;
    const separatedValue = userInputValue.split(defaultDelimiter);

    if (separatedValue.includes('')) {
      throw new Error('[ERROR] 구분자 사이에 입력된 값이 없습니다.');
    }

    separatedValue.forEach(value => {
      if (value !== value.trim()) {
        throw new Error(
          '[ERROR] 문자열을 입력하실 때 공백을 추가하시면 안됩니다.',
        );
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
  }
}

export default App;
