import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      const numbers = this.extractNumbers(input);
      const sum = this.sumNumbers(numbers);
      Console.print(`결과 : ${sum}`);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }

  // 문자열에서 숫자를 추출하는 함수
  extractNumbers(input) {
    let delimiter = /,|:/;
    let inputText = input;

    if (input.startsWith('//')) {
      const endIndex = input.indexOf('\\n');
      delimiter = new RegExp(input.substring(2, endIndex));
      inputText = input.substring(endIndex + 2);
    }
    
    const splitText = inputText.split(delimiter);
    const numbers = splitText.map(Number);
    this.validateNumbers(numbers);
    return numbers;
  }

  // 숫자의 합을 계산하는 함수
  sumNumbers(numbers) {
    let sum = 0;
    numbers.forEach(number => {
      sum += number;
    });
    return sum;
  }

  // 예외 처리 함수
  validateNumbers(numbers) {
    for (const number of numbers) {
      if (number < 0) {
        throw new Error('음수는 허용되지 않습니다.');
      }
    }
  }
}

export default App;