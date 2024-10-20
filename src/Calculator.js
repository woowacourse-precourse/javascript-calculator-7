import { Console } from '@woowacourse/mission-utils';
import { validateEmptyInput } from './validators.js';

function getInput() {
  Console.readLine('덧셈할 문자열을 입력해 주세요.', (answer) => {
    validateEmptyInput(answer);
    console.log(answer);
    const customDelimiter = getCustomDelimiter(answer);
    const result = splitByDelimiter(answer, customDelimiter);
    console.log(result);
    sumArray(result);
  });
}

function getCustomDelimiter(input) {
  const customDelimiterPattern = /^\/\/(.+)\\n/;
  return input.match(customDelimiterPattern);
}

function splitByDelimiter (input, customdelimiter) {
  const defaultDelimiters = [':', ','];
  let remainingInput = input;

  if (customdelimiter) {
    const customDelimiter = customdelimiter[1];
    remainingInput = input.slice(customdelimiter[0].length);
    defaultDelimiters.push(customDelimiter);
  }

  const escapedDelimiters = defaultDelimiters.map(d => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

  const regex = new RegExp(escapedDelimiters.join('|'), 'g');

  return remainingInput.split(regex);
}

function sumArray(arr) {
  const sum = arr
  .map(Number)
  .reduce((acc, curr) => acc + curr, 0);

  console.log(`결과 : ${sum}`);
  return sum;
}

export function calculator() {
  getInput();
}
