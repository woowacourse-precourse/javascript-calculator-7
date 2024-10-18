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

    console.log("Numbers to Validate:", NUMBERS);
    this.validateNumbers(NUMBERS);

    return NUMBERS.reduce((sum, num) => sum + num, 0);
  }

  // 숫자 반환
  parseInput(input) {
    let SEPARATOR = this.defaultSeparators;
    let numbersString = input;

    const customSeparatorCatch = input.match(/^\/\/(.*?)\n/);
    if (customSeparatorCatch) {
      const customSeparators = customSeparatorCatch[1]
        .split(/[\s,]+/)
        .filter(Boolean);
      if (customSeparators.length > 1) {
        throw new Error("[ERROR] 여러 개의 구분자는 지원하지 않습니다.");
      }
      SEPARATOR = customSeparators;
      numbersString = input.split("\n")[1] || ""; //커스텀 구분자 제외 부분
    }

    console.log("Custom Separator:", SEPARATOR);
    console.log("Numbers String:", numbersString);

    const NUMBERS = numbersString
      .split(new RegExp(`[${SEPARATOR.join("")}]`)) // 구분자를 기준으로 숫자 분리
      .map((num) => num.trim()) // 공백 제거
      .filter((num) => num !== "") // 빈 문자열 제거
      .map((num) => {
        const parsedNum = parseFloat(num);

        console.log("Parsed Number:", parsedNum);

        if (isNaN(parsedNum)) {
          throw new Error("[ERROR] 숫자가 아닌 값이 포함되었습니다.");
        }
        return parsedNum; // 유효 숫자만 반환
      });

    console.log("Parsed Numbers:", NUMBERS);
    return { SEPARATOR, NUMBERS };
  }

  // 숫자 목록을 검증하는 함수
  validateNumbers(NUMBERS) {
    const FREFIX_ERROR = "[ERROR]";
    for (const num of NUMBERS) {
      console.log("Validating Number", num);
      if (typeof num !== "number" || isNaN(num)) {
        throw new Error(`${FREFIX_ERROR} 숫자가 아닌 값이 포함되었습니다`);
      }
      if (num < 0) {
        throw new Error(`${FREFIX_ERROR} 음수는 입력할 수 없습니다`);
      }
    }
  }
}

export default CalculatorModel;
