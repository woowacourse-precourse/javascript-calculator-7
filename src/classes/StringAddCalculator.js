class StringAddCalculator {
  // 숫자 합산
  static sum(numbersArray) {
    return numbersArray.reduce((acc, value) => acc + Number(value), 0);
  }
}

export default StringAddCalculator;
