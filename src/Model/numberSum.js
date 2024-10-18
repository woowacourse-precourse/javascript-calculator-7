import { Console } from '@woowacourse/mission-utils';
import UserInput from '../View/UserInput.js';

// 구분자 쉼표나 콜론 기준으로 숫자 추출

const NumberSum = userInput => {
  const regularExpression = /[^0-9]/g;
  const removeStr = userInput.replace(regularExpression, '');

  // 각 자리 숫자 더하는 함수 만들기
  const splitNumbers = removeStr.split('');
  let totalNumberSum = 0;

  for (let i = 0; i < splitNumbers.length; i += 1) {
    totalNumberSum += parseInt(splitNumbers[i]);
  }
  Console.print('결과: ' + totalNumberSum);
};

export default NumberSum;
