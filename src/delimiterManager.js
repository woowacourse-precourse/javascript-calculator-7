// DelimiterManager 클래스는 구분자 리스트를 관리하고 새로운 구분자를 추가하는 기능을 담당
class DelimiterManager {
  constructor() {
    // ","와 ":"는 기본 구분자
    this.delimiters = [",", ":"];
  }

  // 현재 저장된 구분자 배열을 반환
  getDelimiters() {
    return this.delimiters;
  }

  // 새로운 커스텀 구분자를 구분자 배열에 추가하는 메서드
  addCustomDelimiter(delimiter) {
    if (!isNaN(delimiter)) {
      throw new Error(
        "[ERROR] 커스텀 구분자에 숫자 사용 중. 숫자 이외의 문자만 허용"
      );
    }
    this.delimiters.push(delimiter);
  }

  // 입력 문자열을 분석하여 커스텀 구분자와 계산할 숫자 문자열을 추출
  parseInput(input) {
    let calculationString = input;

    if (input.startsWith("//")) {
      if (!input.includes("\\n")) {
        throw new Error("[ERROR] 잘못된 커스텀 구분자 문법");
      }

      const parts = input.split("\\n");

      if (parts.length > 1) {
        const customDelimiter = parts[0].substring(2); // "//" 이후의 문자열 추출 (커스텀 구분자)
        calculationString = parts[1]; // 계산할 문자열 추출
        this.addCustomDelimiter(customDelimiter);
      } else {
        throw new Error("[ERROR] 잘못된 커스텀 구분자 문법");
      }
    }

    // 입력 문자열이 구분자로 시작하거나 끝나는지 확인
    const startsWithDelimiter = this.delimiters.some((delimiter) =>
      calculationString.startsWith(delimiter)
    );
    const endsWithDelimiter = this.delimiters.some((delimiter) =>
      calculationString.endsWith(delimiter)
    );

    if (startsWithDelimiter || endsWithDelimiter) {
      throw new Error("[ERROR] 입력 문자열이 구분자로 시작하거나 종료");
    }

    return {
      delimiters: this.getDelimiters(),
      calculationString: calculationString,
    };
  }

  // 계산할 문자열에서 구분자들을 사용해 숫자들을 추출하는 메서드
  extractNumbers(calculationString) {
    try {
      // 구분자들을 "|"로 연결하여 정규 표현식으로 변환
      const delimiterRegex = new RegExp(
        this.delimiters.map((d) => `\\${d}`).join("|"),
        "g"
      );
      const tokens = calculationString.split(delimiterRegex);

      // 등록되지 않은 구분자가 사용되었는지 확인
      const allowedChars = this.delimiters.map((d) => `\\${d}`).join("");
      const invalidCharRegex = new RegExp(`[^0-9${allowedChars}]`);

      if (invalidCharRegex.test(calculationString)) {
        const invalidChar = calculationString.match(invalidCharRegex)[0];
        throw new Error("[ERROR] 등록되지 않은 구분자");
      }

      const numbers = tokens.map((token) => {
        const number = Number(token);

        if (isNaN(number)) {
          throw new Error("[ERROR] 유효하지 않은 숫자 입력");
        }

        if (
          number > Number.MAX_SAFE_INTEGER ||
          number < Number.MIN_SAFE_INTEGER
        ) {
          throw new Error("[ERROR] 숫자가 정수의 범위를 초과");
        }

        return number;
      });

      return numbers;
    } catch (error) {
      throw error;
    }
  }
}

export default DelimiterManager;
