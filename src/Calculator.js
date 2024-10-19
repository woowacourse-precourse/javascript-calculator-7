import { MissionUtils } from "@woowacourse/mission-utils";

class Calculator {
  calculate(string) {
    try {
      let NUMS = string.split(/,|:/);
      let ANSWER = 0;

      for (let i = 0; i < NUMS.length; i++) {
        ANSWER = ANSWER + parseInt(NUMS[i], 10);
      }
      if(isNaN(ANSWER)){
        ANSWER = 0;
      }
      return ANSWER;
    } catch (error) {}
  }
}

export default Calculator;
