// 구분자 쉼표나 콜론 기준으로 숫자 추출
const NumberSum = userInput => {
  const REGULAR_EXPRESSION = /[^0-9]/g;
  const REMOVE_STR = userInput.replace(REGULAR_EXPRESSION, '');

  // 각 자리 숫자 더하는 함수 만들기
  const SPLIT_NUMBERS = REMOVE_STR.split('');
  let totalNumberSum = 0;

  for (let i = 0; i < SPLIT_NUMBERS.length; i += 1) {
    totalNumberSum += parseInt(SPLIT_NUMBERS[i], 10);
  }
  return totalNumberSum;
};

export default NumberSum;
