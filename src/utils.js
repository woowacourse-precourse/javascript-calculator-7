import { Console } from '@woowacourse/mission-utils';

const printMessage = (message) => Console.print(message);

const throwError = (message) => {
  const errorMessage = `[ERROR] ${message}`;
  throw new Error(errorMessage);
};

export {
  printMessage,
  throwError,
};