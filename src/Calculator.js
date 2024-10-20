import { MissionUtils } from '@woowacourse/mission-utils';

class Calculator {
  calculate(string) {
    let answer = 0;
    let nums;

    let custom = string.match(/\/\/(.*?)\\n/);
    const numRegex = new RegExp(/[0-9]/);

    if (string === '') {
      return 0;
    }

    if (custom) {
      const customDelimiter = custom[1];
      const splitString = string.split(custom[0]);
      if (customDelimiter.length !== 1) {
        throw new Error('[ERROR]');
      }
      if (numRegex.test(customDelimiter)) {
        throw new Error('[ERROR]');
      }
      const regex = new RegExp(`${customDelimiter}|,|:`);
      nums = splitString[1].split(regex);
    } else {
      nums = string.split(/,|:/);
    }

    for (let i = 0; i < nums.length; i++) {
      
      let num = parseInt(nums[i], 10);
      if (num < 0) {
        throw new Error('[ERROR]');
      }
      if (numRegex.test(nums[i])) {
        answer += num;
      } else {
        throw new Error('[ERROR]');
      }
    }
    if (isNaN(answer)) {
      answer = 0;
    }
    return answer;
  }
}

export default Calculator;
