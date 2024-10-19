import {
  END_LETTER,
  REGEX_META_LETTER,
  START_LETTER,
} from "../data/constants.js";

// string => boolean
// 구분자 지정문이 있는지 확인
export const isSelectorExisted = (stringForCheck) => {
  return stringForCheck.startsWith(START_LETTER);
};

// string => [string, string]
// 지정된 구분자와 숫자배열 문자열 분리
export const seperateSelector = (beginningString) => {
  const endLetterIndex = beginningString.indexOf(END_LETTER);
  const selectorPart = beginningString.substring(START_LETTER.length, endLetterIndex)
  const noSelectorPart = beginningString.substring(endLetterIndex+END_LETTER.length)
  return [selectorPart, noSelectorPart]
};

// string => string
// 사용할 수 있는 구분자 제공
export const getSelector = (selectorPart) => {
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
