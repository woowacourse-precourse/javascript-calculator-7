import { DEFAULT_DELIMITERS } from '../constant/constant.js';

export default function splitByDelimiters(cleanedString, customDelimiter) {
  const delimeters = [...DEFAULT_DELIMITERS, customDelimiter].filter(Boolean);

  const regex = new RegExp(`[${delimeters.join("")}]`);

  const parsedNumberList = cleanedString.split(regex).map(Number);

  return parsedNumberList;
}
