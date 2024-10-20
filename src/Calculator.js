import { MissionUtils } from '@woowacourse/mission-utils';

class Calculator {
  calculate(string) {
    try {
      let answer = 0;
      let nums;

      let custom = string.match(/\/\/(.*?)\\n/);

      if (custom) {
        const customDelimiter = custom[1];
        const splitString = string.split(custom[0]);

        if (splitString.length > 1) {
          const regex = new RegExp(`${customDelimiter}|,|:`);
          nums = splitString[1].split(regex);
        }
      } else {
        nums = string.split(/,|:/);
      }

      for (let i = 0; i < nums.length; i++) {
        let num = parseInt(nums[i], 10);
        
        if (!isNaN(num)) {
          answer += num;
        }
      }
      if (isNaN(answer)) {
        answer = 0;
      }
      return answer;
    } catch (error) {}
  }
}

export default Calculator;
