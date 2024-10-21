import { Console } from '@woowacourse/mission-utils';

class StringCalculator {
  static run() {
    Console.readLine('덧셈할 문자열을 입력해 주세요.', (input) => {
      try {
        const result = this.add(input);
        Console.print(`결과 : ${result}`);
        process.exit(); // 프로그램 종료
      } catch (error) {
        Console.print(`[ERROR] ${error.message}`);
        process.exit(1); // 오류 발생 시 프로그램 종료
      }
    });
  }

  static add(input) {
    // 빈 문자열 또는 null 처리
    if (input == null || input.trim() === '') return 0;

    const { delimiters, numbers } = this.extractCustomDelimiter(input);
    const numberArray = this.splitNumbers(numbers, delimiters);
    this.validateNumbers(numberArray);

    // 분리된 숫자들 출력
    Console.print(`분리된 숫자들: ${numberArray.join(', ')}`);

    // 숫자들의 합계 계산
    return numberArray.reduce((sum, num) => sum + Number(num), 0);
  }

  static extractCustomDelimiter(input) {
    let delimiters = [',', ':']; // 기본 구분자
    let numbers = input;

    // 커스텀 구분자 처리
    if (input.startsWith('//')) {
      const delimiterEndIndex = input.indexOf('\\n');
      if (delimiterEndIndex === -1) {
        throw new Error('잘못된 구분자 형식입니다.');
      }
      const customDelimiter = input.substring(2, delimiterEndIndex); // // 이후부터 \n 전까지가 구분자
      delimiters.push(customDelimiter); // 커스텀 구분자 추가
      numbers = input.substring(delimiterEndIndex + 2); // 숫자 부분
    }

    return { delimiters, numbers }; // 구분자 배열과 숫자 문자열 반환
  }

  static splitNumbers(numbers, delimiters) {
    // 구분자를 |로 연결하여 정규식 패턴 생성
    const regexPattern = delimiters.map(d => this.escapeRegExp(d)).join('|');
    const regex = new RegExp(regexPattern, 'g'); // 정규식으로 처리
    return numbers.split(regex).filter(num => num); // 빈 문자열 제거
  }

  // 정규식 이스케이프 처리 함수
  static escapeRegExp(delimiter) {
    return delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // 숫자가 유효한지 확인하는 함수
  static validateNumbers(numbers) {
    numbers.forEach(num => {
      if (isNaN(num) || Number(num) < 0) {
        throw new Error('잘못된 입력입니다. 음수는 허용되지 않습니다.');
      }
    });
  }
}

export default StringCalculator;
