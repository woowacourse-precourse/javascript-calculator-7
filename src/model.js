class CalculatorModel {
  constructor() {
    this.defaultSeparators = [",", ":"]; // 기본 구분자 쉼표(,)와 콜론(:)
  }

  // 문자열 -> 숫자, 합 변환 함수
  calculate(input) {
    if (!input) {
      return 0; // 빈 문자열은 0 반환
    }

    const { SEPARATOR, NUMBERS } = this.parseInput(input);
    if (NUMBERS.length === 0) {
      return 0;
    }

    this.validateNumbers(NUMBERS);

    return NUMBERS.reduce((sum, num) => sum + num, 0);
  }

  // 숫자 반환
  parseInput(input) {
    let SEPARATOR = this.defaultSeparators;
    let numbersString = input;

    // 커스텀 구분자 확인
    const customSeparatorCatch = input.match(/^\/\/(.)\n/);
    if (customSeparatorCatch) {
      SEPARATOR = [customSeparatorCatch[1]]; // 커스텀 구분자 설정
      numbersString = input.split("\n")[1]; // 커스텀 구분자 제외 부분
    }

    const NUMBERS = numbersString
      .split(new RegExp(`[${SEPARATOR.join("")}]`)) // 구분자를 기준으로 숫자 분리
      .filter((num) => num.trim() !== "")
      .map((num) => parseFloat(num));
    return { SEPARATOR, NUMBERS };
  }

  // 숫자 목록을 검증하는 함수
  validateNumbers(NUMBERS) {
    const FREFIX_ERROR = "[ERROR]";
    for (const num of NUMBERS) {
      if (isNaN(num)) {
        throw new Error(`${FREFIX_ERROR} 숫자가 아닌 값이 포함되었습니다`);
      }
      if (num < 0) {
        throw new Error(`${FREFIX_ERROR} 음수는 입력할 수 없습니다`);
      }
    }
  }
}

export default CalculatorModel;
