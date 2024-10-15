class StringCalculator {
  // 입력값을 받아 최종 결과를 반환하는 메서드
  calculate(input) {
    if (this.isEmpty(input)) {
      return 0;
    }

    const numberStrings = this.parseBasicAndCustomDelimiter(input);
    const numbers = this.parseNumbers(numberStrings);

    return this.calculateSum(numbers);
  }

  // 문자열이 비어있는지 확인하는 메서드
  isEmpty(input) {
    return input.trim() === "";
  }

  // 문자열을 숫자로 변환하는 메서드
  parseNumbers(numberStrings) {
    return numberStrings.map((number) => {
      const parsedNumber = parseInt(number, 10);

      // 숫자가 아닌 값이 포함되어 있는 경우
      if (isNaN(parsedNumber)) {
        throw new Error(
          `[ERROR] 숫자가 아닌 값이 포함되어 있습니다: ${number}`
        );
      }
      // 음수가 포함되어 있는 경우
      if (parsedNumber < 0) {
        throw new Error(`[ERROR] 음수는 허용되지 않습니다: ${parsedNumber}`);
      }

      return parsedNumber;
    });
  }

  // 커스텀 구분자를 포함한 모든 구분자 파싱 메서드
  parseBasicAndCustomDelimiter(input) {
    const customDelimiter = /^\/\/(.)\n(.*)/; // (.)은 커스텀 구분자 사이에 있는 하나의 문자를 의미하며 (.*)은 커스텀 구분자 이후의 문자열을 의미한다.
    const match = input.match(customDelimiter);

    // 커스텀 구분자가 있는 경우
    if (match) {
      const [, delimiter, numbers] = match;
      return numbers.split(new RegExp(`[${delimiter},:]`));
    }

    return input.split(/[,:]/);
  }

  // 숫자 배열을 받아 합을 구하는 메서드
  calculateSum(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }

  // 입력값 유효성 검사 메서드
  validateInput(input) {}
}

export default StringCalculator;
