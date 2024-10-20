export default class Validator {
  static validateEmptyInput(text) {
    if (!text) {
      throw new Error("[ERROR] 값이 입력되지 않았습니다. 다시 확인해주세요.");
    }
  }

  static validateNegative(numbers) {
    if (numbers.some(number => parseInt(number, 10) < 0)) {
      throw new Error("[ERROR] 음수인 숫자는 허용되지 않습니다. 다시 확인해주세요.");
    }
  }

  static validateIsSplit(input) {
    if (!input.includes('\\n')) {
      throw new Error('[ERROR] 커스텀 구분자 구문을 잘 못 작성하셨습니다. 다시 확인해주세요.');
    }
  }

  static validateIsNumber(numbers) {
    numbers.forEach((number) => {
      if (isNaN(Number(number))) {
        throw new Error(`[ERROR] 입력된 값이 구분자로 올바르게 나눠지지 않았습니다. 다시 확인해주세요.`);
      }
    });
  }
}
