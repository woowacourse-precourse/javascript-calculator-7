import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const line = await Console.readLineAsync(
        '덧셈할 문자열을 입력해 주세요.\n'
      );
      const result = this.calculate(line);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      throw error;
    }
  }

  calculate = (line) => {
    if (!line) {
      throw new Error('[ERROR] 입력값이 없습니다.');
    }

    const customDelimiterMatch = line.match(/^\/\/(.+)\\n/);
    let delimiters = [',', ':'];
    let numbersString = line;

    if (customDelimiterMatch) {
      const delimiterPart = customDelimiterMatch[1];
      delimiters.push(delimiterPart);
      numbersString = line.substring(customDelimiterMatch[0].length);
    }

    const regex = new RegExp(
      `${delimiters
        .map((d) => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
        .join('|')}`
    );

    let numbers = [];

    try {
      numbers = numbersString.split(regex).map((num) => parseInt(num, 10));
    } catch (error) {
      throw new Error('[ERROR] 잘못된 입력입니다.');
    }

    this.validateNumbers(numbers);

    return numbers.reduce((acc, cur) => acc + cur, 0);
  };

  validateNumbers(numbers) {
    if (numbers.empty) {
      throw new Error('[ERROR] 잘못된 입력입니다.');
    }
    for (const num of numbers) {
      if (isNaN(num)) {
        throw new Error('[ERROR] 잘못된 입력입니다.');
      }
      if (num === 0) {
        throw new Error('[ERROR] 0은 허용되지 않습니다.');
      }
      if (num < 0) {
        throw new Error('[ERROR] 음수는 허용되지 않습니다.');
      }
    }
  }
}

export default App;
