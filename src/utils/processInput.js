import { PRE_SEPERATORS, REGEX_META_LETTER, SELECTOR_REGEX } from "../data/constants.js";
import { WRONG_INPUT_ERROR } from "../data/errorMessage.js";
import getSum from "./getSum.js";

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

// string => string
// 사용할 수 있는 구분자 제공
const getSelector = (selectorPart) => {
  // 구분자에 특수한 문자가 있는지 확인
  let selector = "";
  for (let i = 0; i < selectorPart.length; i++) {
    let selectorLetter = selectorPart[i];
    if (REGEX_META_LETTER.test(selectorLetter)) {
      selector += "\\";
    }
    selector += selectorLetter;
  }

  return selector;
};

// string => boolean
// 구분자 지정문이 있는지 확인
const isSelectorExisted = (stringForCheck) => {
  return SELECTOR_REGEX.test(stringForCheck);
};

// string => [string, string]
// 지정된 구분자와 숫자배열 문자열 분리
const seperateSelector = (beginningString) => {
  const regexCheckedData = SELECTOR_REGEX.exec(beginningString);
  return [regexCheckedData[1], regexCheckedData[2]];
};

// string => number[]
// 구분자 기준으로 분류
const seperateNumbers = (restString, seperatorJoinString) => {
  // 정규식 만들기
  const seperatorJoinRegex = new RegExp(seperatorJoinString);

  // 정규식 기준으로 구분
  const seperatedString = restString.split(seperatorJoinRegex);

  // string[] -> number[]
  return seperatedString.map((e) => {
    return parseInt(e);
  });
};

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

export default processInput;
