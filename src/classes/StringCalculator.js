class StringCalculator {
  // 숫자 검증
  static validateNumbersArray(numbersArray) {
    for (const value of numbersArray) {
      if (Number.isNaN(value)) {
        throw new Error(`[ERROR] ${value} -> 숫자가 아닌 값입니다.`);
      }
      if (value < 0) {
        throw new Error(`[ERROR] ${value} -> 음수는 허용되지 않습니다.`);
      }
    }
  }

  // 숫자 합산
  static sum(numbersArray) {
    return numbersArray.reduce((acc, value) => acc + Number(value), 0);
  }
}

export default StringCalculator;
