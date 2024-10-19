// 입력 받은 문자열이 구분자 + 양수로 구성되지 않는 경우 에러 처리
const validateCorrectInput = (input) => {
  const numberPattern = /^[0-9]+$/;

  for (let num of input) {
    if (!numberPattern.test(num)) {
      return false;
    }

    const parsedNum = parseFloat(num);
    if (parsedNum <= 0) {
      return false;
    }
  }
  return true;
};
export default validateCorrectInput;
