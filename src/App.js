// src/App.js

import { MissionUtils } from '@woowacourse/mission-utils';

/**
 * 문자열 계산기 클래스
 */
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
    // 프로그램 종료 시 process.exit()를 호출하지 않음
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
    if (input === '') {
      return 0;
    }

    const delimiters = this.extractDelimiters(input);
    const numbers = this.parseInput(input, delimiters);
    return this.sumNumbers(numbers);
  }

  /**
   * 입력된 문자열에서 구분자를 추출하는 메서드
   * @param {string} input - 입력된 문자열
   * @returns {string[]} - 구분자 배열
   */
  extractDelimiters(input) {
    const custom_delimiter_pattern = /^\/\/(.+)\n/;
    const match = input.match(custom_delimiter_pattern);
    if (match) {
      const delimiterSection = match[1];
      // 현재는 한 개의 구분자만 처리하지만, 확장성을 위해 배열로 반환
      const delimiters = delimiterSection.split(',').map((delimiter) => this.escapeRegex(delimiter));
      return delimiters;
    }
    // 기본 구분자: 쉼표(,)와 콜론(:)
    return [',', ':'];
  }

  /**
   * 입력된 문자열을 숫자 배열로 변환하는 메서드
   * @param {string} input - 파싱할 문자열
   * @param {string[]} delimiters - 구분자 배열
   * @returns {number[]} - 숫자 배열
   */
  parseInput(input, delimiters) {
    // 커스텀 구분자가 있는 경우 구분자 선언 부분을 제거
    const custom_delimiter_pattern = /^\/\/(.+)\n/;
    const sanitizedInput = input.replace(custom_delimiter_pattern, '');

    // 구분자 배열을 정규표현식 패턴으로 변환
    const delimiter_regex = new RegExp(`[${delimiters.join('')}]`);

    const tokens = sanitizedInput.split(delimiter_regex);

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

  /**
   * 정규표현식에서 특수문자를 이스케이프하는 메서드
   * @param {string} delimiter - 구분자 문자열
   * @returns {string} - 이스케이프된 구분자
   */
  escapeRegex(delimiter) {
    return delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}

export default App;
