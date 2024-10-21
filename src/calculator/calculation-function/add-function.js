import { CalculationFunction } from './calculation-function';

export class AdditionFunction extends CalculationFunction {
  calculateString(calculationArray) {
    // 배열의 각 요소를 숫자로 변환하고 유효성 검사 후 결과 값에 더하기
    calculationArray
      .filter((element) => element !== '')
      .forEach((element) => {
        const num = Number(element);

        if (isNaN(num)) {
          throw new Error(
            '[ERROR] 입력 문자열에 유효하지 않은 구분자가 있습니다.'
          );
        }

        if (num <= 0) {
          throw new Error(
            '[ERROR] 입력 문자열에 0이나 음수가 포함되어 있습니다.'
          );
        }

        this.addToResult(num);
      });

    return this.getResult();
  }
}
