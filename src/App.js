import { Console } from "@woowacourse/mission-utils";

class App {
  // 전체 실행 흐름
  async run() {
    Console.print("덧셈할 문덧셈할 문자열을 입력해 주세요."); // 시작

    const INPUT = await Console.readLineAsync(""); // 사용자 입력

    // 빈 문자열일 경우 결과를 0으로 출력
    if (INPUT.trim() === "") {
      Console.print("결과 : 0"); // 결과
      return; // 함수 종료
    }

    const NUMBERS = this.parseInput(INPUT); // 구분자 처리

    this.validateNumbers(NUMBERS); // 숫자 유효성 검사

    const SUM = this.calculateSum(NUMBERS); // 더하기

    Console.print(`결과 : ${SUM}`); // 결과
  }

  // 구분자 처리하기
  parseInput(INPUT) {
    const BASE_SEPARATORS = ",:"; // 기본 구분자
    const CUSTOM_SEPARATOR = this.getCustomSeparator(INPUT);
    const SEPARATORS = CUSTOM_SEPARATOR
      ? `${BASE_SEPARATORS}${CUSTOM_SEPARATOR}`
      : BASE_SEPARATORS;

    const numbersString = CUSTOM_SEPARATOR
      ? INPUT.split("\\n")[1] // 커스텀 구분자 이후의 문자열을 가져옴
      : INPUT;

    return this.extractNumbers(numbersString, SEPARATORS);
  }

  // 커스텀 구분자 처리하기
  getCustomSeparator(INPUT) {
    if (INPUT.startsWith("//") && INPUT.includes("\\n")) {
      return INPUT[2]; // 커스텀 구분자를 반환
    }
    return null;
  }

  // 숫자 추출하기
  extractNumbers(INPUT, SEPARATORS) {
    return INPUT.split(new RegExp(`[${SEPARATORS}]`)).map((num) => {
      return Number(num.trim());
    });
  }

  // 숫자 검사하기
  validateNumbers(NUMBERS) {
    if (NUMBERS.some((num) => isNaN(num) || num < 0)) {
      throw new Error("[ERROR]");
    }
  }

  // 숫자 합 구하기
  calculateSum(NUMBERS) {
    return NUMBERS.reduce((SUM, num) => SUM + num, 0);
  }
}

export default App;
