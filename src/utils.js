import { Console } from '@woowacourse/mission-utils';
import { TAG } from './constants.js'; 

const printMessage = (message) => Console.print(message);

const throwError = (message) => {
  const errorMessage = `${TAG.ERROR_TAG} ${message}`;
  throw new Error(errorMessage);
};

export {
  printMessage,
  throwError,
};