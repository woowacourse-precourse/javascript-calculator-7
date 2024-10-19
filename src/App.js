// Console API 
import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n'); // 1.프롬프트 입력 기능
      const result = this.calculate(input);
      Console.print(`결과 : ${result}`); 
    } catch(err) {
      throw new Error('[ERROR]')
    }
  }

  // 문자열 덧셈 계산기
  calculate(input) {
    if (!input) {
      return 0;
    }

    const customDelimiter = this.getCustomDelimiter(input); // 2.커스텀 구분자 확인 기능
    const allDelimiter = this.addDelimiter(customDelimiter); // 3.모든 구분자 ( 기본 구분자 배열에 커스컴 구분자 추가 ) 반환 기능
    const delimiterRegex = this.regexDelimiters(allDelimiter); // 4.구분자를 정규 표현식으로 바꾸는 기능
    this.checkForInvalidCharacters(input, delimiterRegex);  // 5.정해진 구분자, 숫자 외 다른 문자 있는지 확인하는 기능 - 유효성 체크
    const numbers = this.splitAndExtractNumbers(input, delimiterRegex); // 6.구분자를 기준으로 숫자를 추출하는 기능

    return this.sumNumbers(numbers); // 7.배열안의 모든 숫자를 덧셈하는 기능
  }

  // 2.커스텀 구분자 확인 기능
  getCustomDelimiter(input) {
    if (input.startsWith('//')) {
      const delimiterSection = input.split('\\n')[0];
      return delimiterSection.substring(2);
    }
    return;
  }

  // 3.모든 구분자 ( 기본 구분자 배열에 커스컴 구분자 추가 ) 반환 기능
  addDelimiter(customDelimiter) {
    let allDelimiter = [',', ':'];
  
    if (customDelimiter) {
      allDelimiter.push(customDelimiter);
    }
  
    return allDelimiter;
  }

  // 4.구분자를 정규 표현식으로 바꾸는 기능
  regexDelimiters(delimiters) {
    const pattern = delimiters.join('|'); 
    return new RegExp(pattern);
  }

  // 5.정해진 구분자, 숫자 외 다른 문자 있는지 확인하는 기능
  checkForInvalidCharacters(input, regexDelimiters) {
    if (input.startsWith('//')) {
      input = input.split('\\n')[1];
    }

    const invalidCharacterPattern = /[^0-9]/;
  
    // 모든 문자가 숫자이거나 구분자에 포함된 경우에만 통과
    for (let char of input) {
      if (invalidCharacterPattern.test(char) && !regexDelimiters.test(char)) {
        throw new Error(); // 허용되지 않는 문자가 있을 경우 에러 발생
      }
    }
  }

  // 6.구분자를 기준으로 숫자를 추출하는 기능
  splitAndExtractNumbers(input, delimiter) {
    if (input.startsWith('//')) {
      input = input.split("\\n")[1]; 
    }

    return input.split(delimiter).map(Number);
  }

  // 7.배열안의 모든 숫자를 덧셈하는 기능
  sumNumbers(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
  }
}

export default App;
