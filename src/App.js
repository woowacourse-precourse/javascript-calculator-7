import { Console } from '@woowacourse/mission-utils';

class App {

  async run() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');

    try {
      const result = this.calculate(input);
      Console.print(`결과 : ${result}`);
    } catch (e) {
      throw new Error('[ERROR] 잘못된 형식의 입력입니다.');
    }
  }

  calculate(input) {
    if (this.isEmptyInput(input)) {
      return 0;
    }

    const { delimiters, updatedInput } = this.delimiterHandler(input); // 변경된 input을 반영
    const numbers = this.splitInput(updatedInput, delimiters);
    return this.sumNumbers(numbers);
  }

  isEmptyInput(input) {
    return input === '';
  }

  delimiterHandler(input) {
    const delimiter = [',', ':'];

    if (input.startsWith('//')) {
      const match = input.match(/^\/\/(.)\\n(.*)$/);
      if (match) {
        const customDelimiter = match[1]; // // 뒤의 문자열을 구분자로 사용
        delimiter.push(customDelimiter);
        input = match[2]; // \n 이후의 문자열을 처리
      } else {
        throw new Error('[ERROR] 잘못된 형식의 입력입니다.');
      }
    }

    return { delimiters: delimiter, updatedInput: input }; // delimiter와 수정된 input을 반환
  }

  splitInput(input, delimiters) {
    const pattern = new RegExp(`[${delimiters.join('')}]`); // 구분자를 합쳐서 정규식으로 생성
    return input.split(pattern);
  }

  sumNumbers(numbers) {
    return numbers.reduce((sum, number) => {
      const parsedNumber = parseInt(number, 10); // 문자열을 10 진수 숫자로 변환
      if (parsedNumber < 0) {
        throw new Error('[ERROR] 음수는 입력할 수 없습니다.');
      }
      return sum + parsedNumber;
    }, 0);
  }
}

export default App;