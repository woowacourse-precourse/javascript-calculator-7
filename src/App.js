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
  
    const delimiters = [',', ':'];
    const tokens = this.splitNumbers(input, delimiters);
  
    const numbers = tokens.map((token) => {
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
    const escapedDelimiters = delimiters.map((delim) =>
      delim.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
    );
    const pattern = new RegExp(escapedDelimiters.join('|'));
    return numbersStr.split(pattern);
  }
}

export default App;
