import { WRONG_INPUT_ERROR } from "../data/errorMessage";

// string => Error?
// 입력받은 값 유효성 검사
const checkError = (restString, seperatorJoinString) => {
  // 숫자배열이 잘 입력되었는지 에러체크
  const numbersRegexString = `^\\d+((${seperatorJoinString})\\d+)*$`;
  const numbersRegex = new RegExp(numbersRegexString);
  if (!numbersRegex.test(restString)) {
    throw new Error(`[ERROR] ${WRONG_INPUT_ERROR}`);
  }
};

export default checkError;
