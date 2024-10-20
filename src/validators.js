import { throwError } from './utils.js';

export function validateEmptyInput(input) {
  if (input.trim() === '') {
    throwError("입력된 값이 없어요. 다시 한 번 덧셈할 숫자를 입력해 주세요!");
  }
}

export function validateNegativeNumbers(numbersArray) {
  const hasNegative = numbersArray.some((number) => Number(number) < 0);
  
  if (hasNegative) {
    throwError("양수만 입력해 주세요.");
  }
}