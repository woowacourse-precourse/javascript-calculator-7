import { PRE_SEPERATORS } from "../data/constants.js";
import checkError from "./checkError.js";
import { seperateNumbers, getSum } from "./processNumbers.js";
import {
  getSelector,
  isSelectorExisted,
  seperateSelector,
} from "./processSelector.js";

// string => number
// 들어온 입력값을 처리해 출력값을 계산
const processInput = (inputData) => {
  const seperators = [...PRE_SEPERATORS];
  let restString = inputData;

  // 구분자 지정문이 있음
  if (isSelectorExisted(inputData)) {
    // 구분자와 숫자배열 분리
    let [selectorPart, noSelectorPart] = seperateSelector(inputData);

    // 구분자 가공
    const selector = getSelector(selectorPart);

    // 구분자 추가 및 숫자배열 최신화
    seperators.push(selector);
    restString = noSelectorPart;
  }

  // 구분자 정보 합치기
  const seperatorJoinString = seperators.join("|");

  // 에러 처리
  checkError(restString, seperatorJoinString);

  // 구분자 기준으로 분류
  const numbersArray = seperateNumbers(restString, seperatorJoinString);

  // 합 구하기
  return getSum(numbersArray);
};

export default processInput;
