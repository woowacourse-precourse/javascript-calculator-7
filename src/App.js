import { Console } from '@woowacourse/mission-utils';

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
    if (input === '' || input === null) return 0;

    const numbers = this.parseNumbers(input);
    this.validateNumbers(numbers);

    return numbers.reduce((sum, num) => sum + num, 0);
  }

  parseNumbers(input) {
    let delimiters = [',', ':'];
    let numbersString = input;

    // 커스텀 구분자 처리
    const customDelimiterMatch = input.match(/^\/\/(.)\\n(.*)/);
    if (customDelimiterMatch) {
      delimiters.push(customDelimiterMatch[1]);
      numbersString = customDelimiterMatch[2];
    }

    // 구분자들을 정규식으로 처리
    const escapedDelimiters = delimiters.map((d) => d.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'));
    const regex = new RegExp(escapedDelimiters.join('|'));

    // 숫자 추출 후 변환
    return numbersString.split(regex).map((num) => {
      const parsedNum = parseInt(num, 10);
      if (isNaN(parsedNum)) {
        throw new Error('[ERROR] 올바른 숫자를 입력해 주세요.');
      }
      return parsedNum;
    });
  }

  validateNumbers(numbers) {
    numbers.forEach((num) => {
      if (num < 0) {
        throw new Error('[ERROR] 올바른 양수를 입력해 주세요.');
      }
    });
  }
}

export default App;
