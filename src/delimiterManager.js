// DelimiterManager 클래스는 구분자 리스트를 관리하고 새로운 구분자를 추가하는 기능을 담당함
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
    this.delimiters.push(delimiter);
  }

  // 입력 문자열을 분석하여 커스텀 구분자와 계산할 숫자 문자열을 추출
  parseInput(input) {
    let customDelimiter = null;
    let calculationString = input;

    if (input.startsWith("//")) {
      const parts = input.split("\\n");

      if (parts.length > 1) {
        customDelimiter = parts[0].substring(2); // "//" 이후의 문자열 추출 (커스텀 구분자)
        calculationString = parts[1]; // 계산할 문자열 추출
        this.addCustomDelimiter(customDelimiter);
      }
    }

    return {
      delimiters: this.getDelimiters(),
      calculationString: calculationString,
    };
  }

  // 계산할 문자열에서 구분자들을 사용해 숫자들을 추출하는 메서드
  extractNumbers(calculationString) {
    // 구분자들을 "|"로 연결하여 정규 표현식으로 변환
    const delimiterRegex = new RegExp(
      this.delimiters.map((d) => `\\${d}`).join("|"),
      "g"
    );
    const numbers = calculationString.split(delimiterRegex).map(Number);
    return numbers;
  }
}

export default DelimiterManager;
