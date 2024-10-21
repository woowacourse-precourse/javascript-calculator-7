import { DEFAULT_DELIMITERS } from '../constant/constant.js';

export default function isValidInput(cleanedString, customDelimiter) {
  if (cleanedString.trim() === "") {
    return;
  }

  const allDelimiters = [...DEFAULT_DELIMITERS, customDelimiter].filter(Boolean);

  let regex;
  if (customDelimiter !== null) {
    regex = new RegExp(`^[0-9,;${allDelimiters.join("")}]+$`);
  } else {
    regex = /^[\\d,;]+$/;
  }
  return regex.test(cleanedString);
}