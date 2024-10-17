import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

    if (this.isEmptyString(input)) {
      Console.print('결과 : 0');
      return;
    }
    
    const numbers = this.splitNumbersByDelimiter(input);
    const result = this.calculateSum(numbers);

    Console.print(`결과 : ${result}`);
  }

  isEmptyString(input) {
    return input.length === 0;
  }

  splitNumbersByDelimiter(input) {
    let delimiters;
    
    if (input.startsWith('//') && input.slice(3, 5) === '\\n') {
      delimiters = input[2];
      input = input.slice(5)
    } else {
      delimiters = /[,:]/;
    }

    const stringNumbers = input.split(delimiters);

    return stringNumbers.map(num => parseInt(num));
  }

  calculateSum(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
}

export default App;
