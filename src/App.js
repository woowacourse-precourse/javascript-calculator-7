import { Console } from "@woowacourse/mission-utils";

class App {
  run() {
    return Console.readLineAsync('덧셈할 문자열을 입력해 주세요.')
      .then((input) => {
        const result = this.calculateSum(input);
        Console.print(`결과 : ${result}`);
      });
  }

  calculateSum(input) {
    if (input === '') {
      return 0;
    }

    let delimiters = [',', ':'];
    let numbersStr = input;

    // 커스텀 구분자 체크
    if (input.startsWith('//')) {
      const delimiterEndIndex = input.indexOf('\\n');
      if (delimiterEndIndex === -1) {
        throw new Error('[ERROR] 잘못된 입력입니다. 커스텀 구분자 지정 형식이 잘못되었습니다.');
      }
      const customDelimiter = input.substring(2, delimiterEndIndex);
      if (customDelimiter.length !== 1) {
        throw new Error('[ERROR] 커스텀 구분자는 한 글자여야 합니다.');
      }
      delimiters.push(customDelimiter);
      numbersStr = input.substring(delimiterEndIndex + 2); // '\\n'의 길이는 2
    }

    // 구분자로 숫자 분리
    const tokens = this.splitNumbers(numbersStr, delimiters);

    // 문자열을 숫자로 변환하고 합계 계산
    const numbers = tokens.map((token) => {
      if (token === '') {
        throw new Error('[ERROR] 잘못된 숫자입니다.');
      }
      const num = Number(token);
      if (isNaN(num) || num <= 0) {
        throw new Error('[ERROR] 잘못된 숫자입니다.');
      }
      return num;
    });

    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum;
  }

  splitNumbers(numbersStr, delimiters) {
    // 구분자에 특수 문자가 있는 경우 이스케이프 처리
    const escapedDelimiters = delimiters.map((delim) =>
      delim.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
    );
    const pattern = new RegExp(escapedDelimiters.join('|'));
    return numbersStr.split(pattern);
  }
}

export default App;