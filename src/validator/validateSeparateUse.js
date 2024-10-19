import { ErrorMessage } from "../common/message.js";

const validateSeparteUse = (input, numbers) => {
  const hasMoreThanTwoNonNum = /[^0-9]{2,}/;

  // 숫자를 제외한 문자열이 2개 이상 연속되는 경우
  if (hasMoreThanTwoNonNum.test(input)) {
    throw new Error(ErrorMessage.HAS_MORE_THAN_TWO_NON_NUMBERS_MESSAGE);
  }

  return true;
};

console.log(validateSeparteUse(",1,2,3"));

export default validateSeparteUse;
