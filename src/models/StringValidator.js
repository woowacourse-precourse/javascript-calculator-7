class StringValidator {
  // 숫자가 아닌 값이 포함되어 있는 경우
  validateNumberStrings(numberStrings) {
    const nonNumberPattern = /[^\d\s-]+/g; // 숫자, 공백, 음수가 아닌 값이 포함되어 있는지 확인하는 정규표현식

    const nonNumberMatch = numberStrings.join("").match(nonNumberPattern);

    if (nonNumberMatch) {
      nonNumberMatch.forEach((nonNumber) => {
        throw new Error(`숫자가 아닌 값이 포함되어 있습니다: ${nonNumber}`);
      });
    }
  }

  // 음수가 포함되어 있는 경우
  validateNegativeNumbers(numbers) {
    const negativeNumbers = numbers.filter((number) => number < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`음수는 허용되지 않습니다: ${negativeNumbers}`);
    }
  }

  // 커스텀 구분자 위치 유효성 검사 메서드
  validateCustomDelimiterPosition(input) {
    if (input.includes("//") && !input.startsWith("//")) {
      throw new Error("커스텀 구분자는 맨 앞에 위치해야 합니다.");
    }
  }

  // 숫자들 사이에 구분자가 여러 개 포함된 경우 유효성 검사 메서드
  validateMultipleDelimiterInput(input, customDelimiter) {
    const delimiters = customDelimiter ? `${customDelimiter},:` : ",:";
    const multipleDelimitersPattern = new RegExp(`[${delimiters}]{2,}`); // 구분자가 2개 이상인 경우를 판별하는 정규표현식

    if (multipleDelimitersPattern.test(input)) {
      throw new Error("구분자는 한 번만 사용할 수 있습니다.");
    }
  }
}

export default StringValidator;
