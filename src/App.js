import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      
      if (this.isEmptyString(input)) {
          Console.print('결과 : 0');
          return;
      }

      const numbers = this.splitNumbersByDelimiter(input);
      const result = this.calculateSum(numbers);

      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  isEmptyString(input) {
    return input.length === 0;
  }

  splitNumbersByDelimiter(input) {
    let delimiter;
    
    if (input.startsWith('//') && input.slice(3, 5) === '\\n') {
      delimiter = input[2];
      input = input.slice(5)
    } else {
      delimiter = /[,:]/;
    }
    
    const stringNumbers = input.split(delimiter);
    
    return stringNumbers.map(num => {
      if (!/^\d+$/.test(num)) {
        throw new Error('[ERROR] 구분자와 양수 이외의 문자는 입력할 수 없습니다.');
      }

      const parsedNum = parseInt(num);
      return parsedNum;
    });
  }

  calculateSum(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
}

export default App;
