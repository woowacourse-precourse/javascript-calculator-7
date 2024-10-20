import { Console } from '@woowacourse/mission-utils';

export const readLineAsync = async (query) => {
  return await Console.readLineAsync(query);
};

export const print = (message) => {
  Console.print(message);
};
