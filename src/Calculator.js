import { Console } from '@woowacourse/mission-utils';
import { validateEmptyInput, validateNegativeNumbers, validateInvalidNumbers } from './validators.js';
import { printMessage } from './utils.js';

async function getInput() {
  const answer = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');
  validateEmptyInput(answer);
  const customDelimiter = getCustomDelimiter(answer);
  const result = splitByDelimiter(answer, customDelimiter);
  sumArray(result);
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
  validateNegativeNumbers(arr);
  validateInvalidNumbers(arr);
  const sum = arr
  .map(Number)
  .reduce((acc, curr) => acc + curr, 0);

  printMessage(`결과 : ${sum}`);
  return sum;
}

export async function calculator() {
  try {
    await getInput();
  } catch (error) {
    throw error;
  }
}
