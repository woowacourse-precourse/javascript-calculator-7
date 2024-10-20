class CalculateSumModel {
  constructor() {}
  calculate(splitArray) {
    //숫자형으로 변환
    const numberArray = this.convertNumber(splitArray);
    //변환한 배열의 모든 값이 유효한 숫자인지 확인
    if (this.isValidateNumber(numberArray)) {
      //유효하다면 연산 진행
      const total = this.calculateSum(numberArray);
      return total;
    } else {
      throw new Error("[ERROR] 계산식은 '숫자'로만 구성돼야 합니다.");
    }
  }

  convertNumber(splitArray) {
    const numberArray = splitArray.map((i) => Number(i));
    return numberArray;
  }

  isValidateNumber(numberArray) {
    const condition = numberArray.filter((i) => !i).length == 0;
    return condition;
  }

  calculateSum(numberArray) {
    const total = numberArray.reduce((a, b) => a + b);
    return total;
  }
}

export default CalculateSumModel;
