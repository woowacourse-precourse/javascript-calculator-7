class Calculator {
  static splitNumbers(mainString, separators) {
    const separatorRegex = new RegExp(`[${separators.join('')}]`); // 구분자들을 정규형으로 나타낸다
    const numArray = mainString.split(separatorRegex); // 숫자를 분리한다

    return numArray.map(num => {
      const number = parseInt(num, 10);
      Calculator.validateNumber(number);
      return number;
    });
  }

  static validateNumber(number) {
    if (Number.isNaN(number) || number < 0) {
      throw new Error('[ERROR] 잘못된 입력입니다. 양수를 입력해 주세요.');
    }
  }

  static sumNumbers(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
}

export default Calculator;
