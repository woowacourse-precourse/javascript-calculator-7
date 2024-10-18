import {
  IS_SELECTOR_WRONG,
  IS_WRONG_NUMBERS,
  IS_WRONG_SEPERATOR,
} from "../data/constants.js";
import {
  WRONG_INPUT_ERROR,
  WRONG_NUMBERS_ERROR,
  WRONG_SELECTOR_ERROR,
  WRONG_SEPERATOR_ERROR,
} from "../data/errorMessage.js";

// string => Error?
// 입력받은 값 유효성 검사
const checkError = (restString, seperatorJoinString) => {
  const numbersRegexString = `^\\d+((${seperatorJoinString})\\d+)*$`;
  const numbersRegex = new RegExp(numbersRegexString);

  // 에러 없음
  if (numbersRegex.test(restString)) {
    return;
  }

  // 커스텀 구분자 지정문 에러
  if (IS_SELECTOR_WRONG.test(restString)) {
    throw new Error(`[ERROR] ${WRONG_SELECTOR_ERROR}`);
  }
  // 지정되지 않은 구분자 사용 에러
  if (IS_WRONG_SEPERATOR.test(restString)) {
    throw new Error(`[ERROR] ${WRONG_SEPERATOR_ERROR}`);
  }
  // 숫자배열 입력 에러
  if (IS_WRONG_NUMBERS.test(restString)) {
    throw new Error(`[ERROR] ${WRONG_NUMBERS_ERROR}`);
  }

  // 입력 에러
  throw new Error(`[ERROR] ${WRONG_INPUT_ERROR}`);
};

export default checkError;
