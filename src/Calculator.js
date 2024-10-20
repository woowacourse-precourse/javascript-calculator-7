import { MissionUtils } from "@woowacourse/mission-utils";

class Calculator {
  static checkIsPositiveNumber(numStrArray) {
    const result = [];
    numStrArray.forEach((numStr) => {
      if (numStr === "") {
        result.push(0);
        return;
      }
      const parsedNum = Number(numStr);
      if (isNaN(parsedNum) || parsedNum <= 0) throw new Error("[ERROR] 양수가 아닌 값은 계산할 수 없습니다.");
      result.push(parsedNum);
    });

    return result;
  }

  static addNumbers(numArray) {
    let sum = 0;
    numArray.forEach(num => {
      sum += Number(num);
    });
    return sum;
  }
}


export default Calculator;