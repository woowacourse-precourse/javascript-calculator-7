import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const userInputValue = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n',
    );

    const defaultDelimiter = /,|:/;
    const separatedValue = userInputValue.split(defaultDelimiter);
    const convertedNumbers = separatedValue.map(Number);
  }
}

export default App;
