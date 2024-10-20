import { Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    // 기본 구분자를 배열로 정의
    this.defaultDelimiters = [',', ':'];
  }

  async run() {
    try {
      const input = await Console.readLineAsync(
        '덧셈할 문자열을 입력해 주세요.\n',
      ); // 문자열 입력
      const result = this.calculate(input); // 계산 결과 얻기
      this.printResult(result); // 결과 출력
    } catch (error) {
      this.handleError(); // 예외 처리
    }
  }

  // 1. 예외 처리 함수
  handleError() {
    Console.print('[ERROR]');
    throw new Error('[ERROR]');
  }

  // 2. 입력된 문자열 검증
  validateInput(input) {
    if (!input) {
      return '0'; // 빈 문자열일 때 '0' 반환
    }
    return input;
  }

  // 3. 구분자 판단 (기본 구분자 또는 커스텀 구분자)
  getDelimiter(input) {
    if (input.startsWith('//')) {
      const customDelimiterMatch = input.match(/^\/\/(.)\\n(.*)$/);
      if (customDelimiterMatch) {
        const [, customDelimiter, numbers] = customDelimiterMatch;
        return { delimiter: new RegExp(`[${customDelimiter}]`), numbers };
      }
      this.handleError();
    }

    // 기본 구분자를 배열로 관리하고, 정규식으로 변환
    const defaultDelimiterRegex = new RegExp(
      `[${this.defaultDelimiters.join('')}]`,
    );
    return { delimiter: defaultDelimiterRegex, numbers: input };
  }

  // 4. 구분자에 따른 문자열 분리 및 예외 처리
  splitByDelimiter(input, delimiter) {
    const numberStrings = input.split(delimiter);
    return numberStrings.map((str) => {
      const number = Number(str);
      if (isNaN(number)) {
        this.handleError();
      }
      return number;
    });
  }

  // 5. 음수 검증 및 합산 계산
  sumNumbers(numbers) {
    const negativeNumbers = numbers.filter((num) => num < 0);
    if (negativeNumbers.length > 0) {
      this.handleError();
    }
    return numbers.reduce((acc, num) => acc + num, 0);
  }

  // 6. 계산 과정 통합
  calculate(input) {
    input = this.validateInput(input); // 입력 검증
    const { delimiter, numbers } = this.getDelimiter(input); // 구분자 및 숫자 추출
    const numberList = this.splitByDelimiter(numbers, delimiter); // 구분자로 문자열 분리
    return this.sumNumbers(numberList); // 숫자 합산
  }

  // 7. 결과 출력
  printResult(result) {
    Console.print(`결과 : ${result}`);
  }
}

export default App;
