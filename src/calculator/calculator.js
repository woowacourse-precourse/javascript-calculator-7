export class Calculator {
  #calculationString = '';
  #result = 0;
  #separatorRegexPattern = ',|:';
  #CHECK_CUSTOM_PATTERN_REGEX = new RegExp('^/');
  #EXTRACT_SEPARATOR_AND_STRING_REGEX = new RegExp('^//(.+?)\\\\n([\\s\\S]*)');

  // 커스텀 구분자 사용 여부를 확인
  hasCustomSeparator() {
    return this.#CHECK_CUSTOM_PATTERN_REGEX.test(this.#calculationString);
  }

  // 커스텀 구분자를 추출하고 계산할 문자열을 업데이트
  extractCustomSeparator() {
    const separatorAndStringMatch = this.#calculationString.match(
      this.#EXTRACT_SEPARATOR_AND_STRING_REGEX
    );

    if (separatorAndStringMatch) {
      const customSeparator = separatorAndStringMatch[1].trim();

      if (customSeparator.length > 1) {
        throw new Error('[ERROR] 커스텀 구분자는 단일 문자를 사용해야합니다.');
      }

      if (!isNaN(Number(customSeparator))) {
        throw new Error('[ERROR] 커스텀 구분자는 숫자를 사용할 수 없습니다.');
      }

      // 커스텀 구분자를 구분자 정규식 패턴에 추가
      this.#separatorRegexPattern += '|\\' + customSeparator;

      // 계산할 문자열을 업데이트
      this.#calculationString = separatorAndStringMatch[2].trim();
    } else {
      throw new Error(
        '[ERROR] 커스텀 구분자 지정 형식에 맞지 않거나 커스텀 구분자가 작성되지 않았습니다.'
      );
    }
  }

  // 계산할 문자열을 구분자로 나누고 숫자로 변환하여 덧셈을 수행
  calculateString() {
    const calculationArray = this.#calculationString.split(
      new RegExp(`[${this.#separatorRegexPattern}]`)
    );

    // 배열의 각 요소를 숫자로 변환하고 유효성 검사 후 반환
    calculationArray
      .filter((element) => element !== '')
      .forEach((element) => {
        const num = Number(element);

        if (isNaN(num)) {
          throw new Error(
            '[ERROR] 입력 문자열에 유효하지 않은 구분자가 있습니다.'
          );
        }

        if (num <= 0) {
          throw new Error(
            '[ERROR] 입력 문자열에 0이나 음수가 포함되어 있습니다.'
          );
        }

        this.#result += num;
      });
  }

  // 입력 문자열을 계산하여 결과를 반환
  calculate(inputString) {
    if (inputString) {
      this.#calculationString = inputString;

      if (this.hasCustomSeparator()) {
        this.extractCustomSeparator();
      }

      this.calculateString();
    }

    return this.#result;
  }
}
