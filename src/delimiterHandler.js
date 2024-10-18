import { validateMixedDelimiters } from './validator.js';

function parseDefaultDelimiters(userInput) {
  const defaultDelimiterPattern = /[,:]/g;
  const delimiterSeparatedArray = userInput.split(defaultDelimiterPattern);

  return delimiterSeparatedArray;
}

function parseCustomDelimiters(userInput) {
  validateMixedDelimiters(userInput);

  const customDelimitersPattern = /^\/\/(.*?)\\n/;
  const match = userInput.match(customDelimitersPattern);

  if (!match) {
    throw new Error('[ERROR] 커스텀 구분자는 맨 앞에 위치해야 합니다.');
  }

  const customDelimiter = match[1];
  const delimiterSeparatedArray = userInput
    .split('\\n')[1]
    .split(customDelimiter);

  return delimiterSeparatedArray;
}

export default function parseInput(userInput) {
  return userInput.startsWith('//')
    ? parseCustomDelimiters(userInput)
    : parseDefaultDelimiters(userInput);
}
