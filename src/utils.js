import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constants.js";

export const handleError = (messages) => {
  const formattedMessage = `[ERROR] ${messages}`;
  throw Error(formattedMessage);
};

export const sum = (numbers) => {
  if (!numbers.length) return 0;

  let result = 0;
  for (const number of numbers) result += number;

  return result;
};

export const readInput = async () => {
  const userInput = await Console.readLineAsync(MESSAGE.INPUT);
  return userInput;
};

export const printResult = (result) => {
  return Console.print(MESSAGE.PRINT + result);
};
