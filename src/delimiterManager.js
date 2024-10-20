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

  // 입력 문자열을 분석하여 커스텀 구분자와 계산할 숫자 문자열을 추출
  parseInput(input) {
    let customDelimiter = null;
    let calculationString = input;

    // 커스텀 구분자가 있는지 확인 (예: //;\n1;2;3)
    const customDelimiterMatch = input.match(/^\/\/(.+)\n/);
    if (customDelimiterMatch) {
      customDelimiter = customDelimiterMatch[1]; // 커스텀 구분자 추출
      this.delimiters.push(customDelimiter); // 커스텀 구분자를 구분자 배열에 추가
      calculationString = input.split("\n")[1]; // 계산할 숫자 문자열 추출
    }

    return {
      delimiters: this.getDelimiters(), // 구분자 배열
      calculationString: calculationString, // 계산할 문자열
    };
  }
}

export default DelimiterManager;
