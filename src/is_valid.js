import { Console } from '@woowacourse/mission-utils';

export function validateInput(INPUT) {
  if (!INPUT) {
    const ERROR_MESSAGE = '[ERROR] 입력값이 없습니다.'
    Console.print(ERROR_MESSAGE);
    throw new Error(ERROR_MESSAGE);
  }
}

export function validateNumber(VALUE) {
  if (!/^\d+$/.test(VALUE)) {
    const ERROR_MESSAGE = '[ERROR] 입력이 올바르지 않습니다.';
    Console.print(ERROR_MESSAGE);
    throw new Error(ERROR_MESSAGE);
  }
}