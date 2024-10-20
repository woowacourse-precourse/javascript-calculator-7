import { CUSTOM_PATTERN } from './regex.js';

export default function getDelimiter(input) {
  const basicDelimiter = /[,:]/;
  const pattern = input.match(CUSTOM_PATTERN);

  if (pattern) {
    const customDelimiter = pattern[1];
    return new RegExp(`[${customDelimiter},:]`);
  }
  
  return basicDelimiter;
}
