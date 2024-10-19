// Console API 
import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n'); // 1.프롬프트 입력 기능
      const result = this.calculate(input);
      Console.print(`결과 : ${input}`); 
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
    Console.print(allDelimiter);

    return 0;
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
}

export default App;
