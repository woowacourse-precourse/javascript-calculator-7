class CalculatorModel {
  constructor() {
    this.defaultSeparators = [",", ":"];
  }
}

// 문자열 -> 숫자, 합 반환 함수
calculate(input);
{
  if (!input) {
    return 0; // 빈 문자열은 0 반환
  }

  const { SEPARATOR, NUMBERS } = this.parseInput(input);
  this.validateNumbers(NUMBERS);

  return NUMBERS, reduce((sum, num) => sum + num, 0);
}
