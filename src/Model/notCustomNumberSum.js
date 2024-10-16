import UserInput from '../View/UserInput.js';

// 구분자 쉼표나 콜론 기준으로 숫자 추출

const notCustomNumberSum = userInput => {
  const regularExpression = /[^0-9]/g;
  const removeStr = userInput.replace(regularExpression, '');

  // 각 자리 숫자 더하는 함수 만들기
  const splitNumbers = removeStr.split('');
  let totalNumberSum = 0;

  for (let i = 0; i < splitNumbers.length; i++) {
    totalNumberSum += parseInt(splitNumbers[i]);
  }
  console.log('결과: ', totalNumberSum);
};

export default notCustomNumberSum;
