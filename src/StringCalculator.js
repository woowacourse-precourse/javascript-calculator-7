class StringCalculator {
  // 입력값을 받아 최종 결과를 반환하는 메서드
  calculate(input) {
    if (this.isEmpty(input)) {
      return 0;
    }

    const numberStrings = this.parseDelimiter(input);
    const numbers = this.parseNumbers(numberStrings);

    return this.calculateSum(numbers);
  }

  // 문자열이 비어있는지 확인하는 메서드
  isEmpty(input) {
    return input.trim() === "";
  }

  // 문자열을 숫자로 변환하는 메서드
  parseNumbers(numberStrings) {
    return numberStrings.map((number) => parseInt(number, 10));
  }

  // ,와 :를 구분자로 사용하여 숫자 배열을 반환하는 메서드
  parseDelimiter(input) {
    return input.split(/[,:]/).map((item) => item.trim());
  }

  // 숫자 배열을 받아 합을 구하는 메서드
  calculateSum(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }

  // 커스텀 구분자 파싱 메서드
  parseCustomDelimiter(input) {}

  // 입력값 유효성 검사 메서드
  validateInput(input) {}
}

export default StringCalculator;
