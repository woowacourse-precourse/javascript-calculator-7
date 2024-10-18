class StringCalculator {
  validateInput(input) {
    // 빈 문자열 검사
    if (!input || input.trim() === "") {
      throw new Error("[ERROR] 입력값이 빈 문자열입니다.");
    }

    // 커스텀 구분자 여부 검사 (커스텀 구분자가 있으면 통과, 나중에 처리)
    const customDelimiterPattern = /^\/\/.\n/;
    if (customDelimiterPattern.test(input)) {
      return;
    }

    // 기본 구분자 검사
    const validPattern = /^(\d+|,|:)+$/;
    if (!validPattern.test(input)) {
      throw new Error(
        "[ERROR] 입력값에 허용되지 않는 문자가 포함되어 있습니다."
      );
    }
  }
}
export default StringCalculator;
