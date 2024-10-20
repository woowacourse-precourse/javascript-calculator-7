import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      await this.startCalculator();
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    } 
  }

  async startCalculator() {
    try {
      const userInput = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      const normalizedInput = this.normalizeInput(userInput);
      const result = this.add(normalizedInput);
      Console.print(`결과: ${result}`);
      await this.askForRestart(); // 계산 후 재시작 여부 묻기
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
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

      // '-'를 커스텀 구분자로 사용할 수 없도록 제한
      if (customDelimiter.includes('-')) {
        throw new Error("[ERROR] '-' cannot be used as a custom delimiter.");
      }

      // 숫자를 커스텀 구분자로 사용할 수 없도록 제한
      if (/^\d+$/.test(customDelimiter)) {
        throw new Error('[ERROR] Custom delimiter cannot be a number.');
      }

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

  async askForRestart() {
    const answer = await Console.readLineAsync("다시 시작하시겠습니까? (Y/N)\n");
    const normalizedAnswer = answer.trim().toUpperCase(); // 대소문자 구분 없이 처리

    if (normalizedAnswer === 'Y') {
      await this.startCalculator(); // 재시작
    } else if (normalizedAnswer === 'N') {
    } else {
      Console.print("[ERROR] Y 또는 N만 입력할 수 있습니다.");
      await this.askForRestart(); // 올바른 입력이 아닐 경우 다시 묻기
    }
  }
}

export default App;
