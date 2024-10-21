import { DEFAULT_DELIMITERS } from '../constant/constant.js';

export default function checkInputValidity(cleanedString, customDelimiter) {
  if (cleanedString.trim() === "") {
    return;
  }

  const allDelimiters = [...DEFAULT_DELIMITERS, customDelimiter].filter(Boolean);

  const regex = new RegExp(`^[0-9${allDelimiters.join("")}]+$`);

  if (!regex.test(cleanedString)) {
    throw new Error("[ERROR] : [,][;][커스텀 구분자][숫자 문자]를 제외한 입력이 존재합니다!");
  }
}