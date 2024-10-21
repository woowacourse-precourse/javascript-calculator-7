import { validateNumber } from './is_valid.js';

export function sum(NUMBERS) {
  return NUMBERS.reduce((acc, cur) => {
    validateNumber(cur);
    return acc + parseInt(cur, 10);
  }, 0);
}