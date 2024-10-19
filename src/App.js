import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const inputValue = await this.getInputValue();
    const parsedInputValue = this.parseInputValueToNumber(inputValue);

    let result = this.getSum(parsedInputValue);

    try {
      if (!inputValue) {
        throw new Error('[ERROR] 입력값이 없습니다.');
      }

      Console.print(`결과 : ${result}`);
    } catch (err) {
      Console.print(err);
    }
  }

  async getInputValue() {
    return await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
  }

  parseInputValueToNumber(inputValue) {
    const defaultDelimiter = /,|:/;
    return inputValue.split(defaultDelimiter).map(Number);
  }

  getSum(numbers) {
    return numbers.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  }
}

export default App;
