import { DEFAULT_DELIMITERS } from '../constant/constant.js';

// 문자열을 구분자에 따라 나누고, 숫자 배열로 변환하는 함수

export default function splitByDelimiters(cleanedString, customDelimiter) {
  const delimeters = [...DEFAULT_DELIMITERS, customDelimiter].filter(Boolean);
  const regex = new RegExp(`[${delimeters.join("")}]`);
  const parsedNumberList = cleanedString.split(regex).map(Number);
  return parsedNumberList;
}
