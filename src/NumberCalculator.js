// 숫자 유효성 검사
const validateNumber = number => {
  if (number === '') {
    throw new Error('[ERROR] 값이 빈 숫자가 입력되었습니다.');
  }
  if (isNaN(number)) {
    throw new Error('[ERROR] 숫자가 아닌 값이 입력되었습니다.');
  }
  if (number < 0) {
    throw new Error('[ERROR] 음수가 아닌 양수를 입력해 주세요.');
  }
};

// 숫자의 합을 계산하여 반환하는 함수
const numberCalculator = numbers => {
  return numbers.reduce((hap, number) => {
    const trimNumber = number.trim();
    validateNumber(trimNumber);
    return hap + Number(trimNumber);
  }, 0);
};

export default numberCalculator;
