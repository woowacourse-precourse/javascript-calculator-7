import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { Console } = require('@woowacourse/mission-utils');

class App {
  run() {
    return Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n')
      .then((input) => {
        const result = this.calculate(input);
        Console.print(`결과 : ${result}`);
      })
      .catch((error) => {
        Console.print(error.message);
        throw error;
      });
  }

  calculate(input) {
    const numbers = this.parseNumbers(input);
    return numbers.reduce((sum, num) => sum + num, 0);
  }
  parseNumbers(input) {
    let delimiters = [',', ':'];
    let numbersString = input;

    const customDelimiterMatch = input.match(/^\/\/(.)\n(.*)/);
    if (customDelimiterMatch) {
      delimiters.push(customDelimiterMatch[1]);
      numbersString = customDelimiterMatch[2];
    }
    const escapedDelimiters = delimiters.map((d) => d.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'));
    const regex = new RegExp(escapedDelimiters.join('|'));
    return numbersString.split(regex).map((num) => parseInt(num, 10));
  }
}

export default App;