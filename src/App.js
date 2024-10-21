// src/App.js

import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  /**
   * 애플리케이션 실행 메서드
   */
  async run() {
    MissionUtils.Console.print('덧셈할 문자열을 입력해 주세요.');
    try {
      const input = await this.readLineAsync('');
      const result = this.calculate(input);
      MissionUtils.Console.print(`결과 : ${result}`);
    } catch (error) {
      MissionUtils.Console.print(`[ERROR] ${error.message}`);
    }
    // Console.close()는 패키지에 존재하지 않으므로 제거합니다.
  }

  /**
   * 비동기적으로 사용자 입력을 받는 메서드
   * @param {string} question - 사용자에게 물어볼 질문
   * @returns {Promise<string>} - 사용자의 입력값
   */
  readLineAsync(question) {
    return new Promise((resolve) => {
      MissionUtils.Console.readLineAsync(question, (input) => {
        resolve(input);
      });
    });
  }

  /**
   * 입력된 문자열을 계산하는 메서드
   * @param {string} input - 계산할 문자열
   * @returns {number} - 계산 결과
   */
  calculate(input) {
    // 빈 문자열을 입력받는다면 0을 반환
    if (input === '') {
      return 0;
    }

    const numbers = this.parseInput(input);
    return this.sumNumbers(numbers);
  }

  /**
   * 입력된 문자열을 숫자 배열로 변환하는 메서드
   * @param {string} input - 파싱할 문자열
   * @returns {number[]} - 숫자 배열
   */
  parseInput(input) {
    const delimiters = [',', ':'];
    const tokens = input.split(new RegExp(`[${delimiters.join('')}]`));

    const numbers = tokens.map((token) => {
      const number = Number(token);
      if (isNaN(number)) {
        throw new Error('유효한 숫자가 아닙니다.');
      }
      if (number < 0) {
        throw new Error('음수는 입력할 수 없습니다.');
      }
      return number;
    });

    return numbers;
  }

  /**
   * 숫자 배열의 합을 계산하는 메서드
   * @param {number[]} numbers - 합산할 숫자 배열
   * @returns {number} - 합산 결과
   */
  sumNumbers(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
}

export default App;
