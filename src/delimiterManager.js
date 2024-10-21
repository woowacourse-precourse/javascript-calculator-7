// DelimiterManager 클래스는 구분자 리스트를 관리하고 새로운 구분자를 추가하는 기능을 담당
class DelimiterManager {
  constructor() {
    // ","와 ":"는 기본 구분자
    this.delimiters = [",", ":"];
  }

  /**
   * 현재 저장된 구분자 배열을 반환
   * @returns {string[]} 현재 구분자 배열
   */
  getDelimiters() {
    return this.delimiters;
  }

  /**
   * 새로운 커스텀 구분자를 구분자 배열에 추가
   * @param {string} delimiter - 추가할 커스텀 구분자
   * @throws {Error} 숫자를 구분자로 추가할 때 에러
   */
  addCustomDelimiter(delimiter) {
    if (!isNaN(delimiter)) {
      throw new Error(
        "[ERROR] 커스텀 구분자에 숫자 사용 중. 숫자 이외의 문자만 허용"
      );
    }
    this.delimiters.push(delimiter);
  }

  /**
   * 입력 문자열을 분석하여 커스텀 구분자와 계산할 숫자 문자열을 추출
   * @param {string} input - 사용자가 입력한 문자열
   * @returns {Object} 구분자와 계산할 문자열을 포함한 객체
   * @throws {Error} 커스텀 구분자 문법이 잘못되었거나 입력 문자열이 구분자로 시작하거나 끝날 때 에러
   */
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
    const startDelimiter = this.delimiters.some((delimiter) =>
      calculationString.startsWith(delimiter)
    );
    const endDelimiter = this.delimiters.some((delimiter) =>
      calculationString.endsWith(delimiter)
    );

    if (startDelimiter || endDelimiter) {
      throw new Error("[ERROR] 입력 문자열이 구분자로 시작하거나 종료");
    }

    return {
      delimiters: this.getDelimiters(),
      calculationString: calculationString,
    };
  }

  /**
   * 계산할 문자열에서 구분자들을 사용해 숫자들을 추출
   * @param {string} calculationString - 계산할 문자열
   * @returns {number[]} 추출된 숫자 배열
   * @throws {Error} 등록되지 않은 구분자, 유효하지 않은 숫자, 또는 숫자가 정수 범위를 초과할 때 에러
   */
  extractNumbers(calculationString) {
    try {
      // 구분자들을 "|"로 연결하여 정규 표현식으로 변환
      const delimiterRegex = new RegExp(
        this.delimiters.map((d) => `\\${d}`).join("|"),
        "g"
      );
      const stringNumbers = calculationString.split(delimiterRegex);

      // 등록되지 않은 구분자가 사용되었는지 확인
      const allowedDelimiters = this.delimiters.map((d) => `\\${d}`).join("");
      const invalidDelimiterRegex = new RegExp(`[^0-9${allowedDelimiters}]`);

      if (invalidDelimiterRegex.test(calculationString)) {
        throw new Error("[ERROR] 등록되지 않은 구분자");
      }

      const numbers = stringNumbers.map((stringNumber) => {
        const number = Number(stringNumber);

        if (isNaN(number)) {
          throw new Error("[ERROR] 유효하지 않은 숫자 입력");
        }

        if (number < 0) {
          throw new Error("[ERROR] 현재 음수 사용. 양수만 사용 가능");
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
