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
    
    if (input.startsWith('//')) {
      if (!input.includes('\\n')) {
        throw new Error('[ERROR] "\\n"이 누락되었습니다.');
      }

      if (!(input.slice(3, 5) === '\\n')) {
        throw new Error('[ERROR] 커스텀 구분자는 한 글자를 초과할 수 없습니다.');
      }

      delimiter = input[2];

      if (!isNaN(delimiter)) {
        throw new Error('[ERROR] 커스텀 구분자로 숫자는 지정할 수 없습니다.')
      }

      input = input.slice(5);
    } else {
      delimiter = /[,:]/;
    }
    
    const stringNumbers = input.split(delimiter);

    if (stringNumbers.length === 0 || stringNumbers.every(num => num.trim() === '')) {
      throw new Error('[ERROR] 구분자만 입력할 수 없습니다.');
    }
    
    return stringNumbers.map(num => {
      if (num.trim() === '') {
        throw new Error('[ERROR] 구분자와 구분자 사이에 반드시 숫자가 있어야 합니다.');
      }

      if (!/^\d+$/.test(num)) {
        throw new Error('[ERROR] 구분자와 양수 이외의 문자는 입력할 수 없습니다.');
      }

      const parsedNum = parseInt(num, 10);
      return parsedNum;
    })
  }

  calculateSum(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
}

export default App;
