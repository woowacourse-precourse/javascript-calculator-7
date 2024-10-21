import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const line = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n'
    );
    const result = this.calculate(line);
    Console.print(`결과 : ${result}`);
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
      numbers = numbersString.split(regex).map((num) => {
        // console.log(`num: "${num}"`);
        return parseInt(num, 10);
      });
    } catch (error) {
      throw new Error('[ERROR] 잘못된 입력입니다.');
    }

    return numbers.reduce((acc, cur) => acc + cur, 0);
  };
}

export default App;
