import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      // 사용자 입력 받기
      const userInput= await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      const normalizedInput = this.normalizeInput(userInput); // 입력 정규화
      const result = this.add(normalizedInput);
      Console.print(`결과: ${result}`);
    } catch (error) {
      Console.print(error.message);
    } 
  }

  /**
   * 문자열 덧셈 계산기 함수
   * @param {string} input - 입력된 문자열
   * @returns {number} - 문자열 내 숫자의 합
   */
  add(input = '') {
    if (input === '') return 0;

    // 1-1. 기본 구분자 설정
    let delimiter = /[,:]/;

    // 1-2. 커스텀 delim 설정
    if (input.startsWith('//')) {
      const delimiterEnd = input.indexOf('\n');

      if (delimiterEnd === -1) {
        throw new Error('[ERROR] Invalid custom delimiter format.');
      }

      const customDelimiter = input.substring(2, delimiterEnd);

      //RegExp : 정규표현식 객체 생성 
      //escapeRegExp : 이스케이프 문자열 -> 정규표현식 객체 변환
      delimiter = new RegExp(`[${this.escapeRegExp(customDelimiter)}]`);
      input = input.substring(delimiterEnd + 1);
    }

    // 2. 구분자를 기준으로 나누고 숫자를 numbers배열에 저장
    const numbers = input.split(delimiter).map((num) => {
      if (num.trim() === '') return 0;
      const parsedNumber = parseInt(num, 10);
      if (isNaN(parsedNumber)) {
        throw new Error('[ERROR] Invalid input: all elements must be integers.');
      }
      return parsedNumber;
    });

    return numbers.reduce((acc, curr) => acc + curr, 0);
  }

  /**
   * 정규표현식에 사용할 문자열 이스케이프 처리
   * @param {string} string - 이스케이프할 문자열
   * @returns {string} - 이스케이프된 문자열
   */
  //특수문자 이스케이프 처리  (* -> \*) -> 정규식에서 특수문자를 리터럴 문자로 인식
  escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  /**
   * 입력 문자열을 정규화하여 줄바꿈 문자를 처리
   * @param {string} input - 사용자 입력 문자열
   * @returns {string} - 정규화된 문자열
   */
    normalizeInput(input) {
      return input.replace(/\\n/g, '\n'); // \\n을 실제 \n로 변환
    }
}

export default App;
