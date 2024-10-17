class StringCalculator {
  // 입력값을 받아 최종 결과를 반환하는 메서드
  calculate(input) {
    this.validateCustomDelimiterPosition(input);
    const preProcessInput = this.preProcessInput(input);

    if (this.isEmpty(preProcessInput)) {
      return 0;
    }

    const { numberStrings, customDelimiter } =
      this.parseBasicAndCustomDelimiter(preProcessInput); // 기본 구분자와 커스텀 구분자를 파싱함.
    this.validateMultipleDelimiterInput(preProcessInput, customDelimiter); // 숫자들 사이에 구분자가 여러 개 포함된 경우 유효성 검사
    this.validateNumberStrings(numberStrings); // 숫자가 아닌 값이 포함되어 있는 경우 유효성 검사
    this.validateNegativeNumbers(numberStrings); // 음수가 포함되어 있는 경우 유효성 검사

    const numbers = this.parseNumbers(numberStrings);

    return this.calculateSum(numbers);
  }

  // \n을 개행문자로 변환하는 메서드
  preProcessInput(input) {
    return input.replace(/\\n/g, "\n");
  }

  // 문자열이 비어있는지 확인하는 메서드
  isEmpty(input) {
    return input.trim() === "";
  }

  // 문자열을 숫자로 변환하는 메서드
  parseNumbers(numberStrings) {
    return numberStrings.map((number) => parseInt(number, 10));
  }

  // 커스텀 구분자를 포함한 모든 구분자 파싱 메서드
  parseBasicAndCustomDelimiter(input) {
    const customDelimiter = /^\/\/(.)\n(.*)/; // (.)은 커스텀 구분자 사이에 있는 하나의 문자를 의미하며 (.*)은 커스텀 구분자 이후의 문자열을 의미한다.
    const match = input.match(customDelimiter);

    // 커스텀 구분자가 있는 경우
    if (match) {
      const [, delimiter, numbers] = match;
      return {
        numberStrings: numbers.split(new RegExp(`[${delimiter},:]`)),
        customDelimiter: delimiter,
      };
    }

    return {
      numberStrings: input.split(/[,:]/),
      customDelimiter: null,
    };
  }

  // 숫자 배열을 받아 합을 구하는 메서드
  calculateSum(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }

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

export default StringCalculator;
