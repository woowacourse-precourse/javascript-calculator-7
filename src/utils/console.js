import { Console } from "@woowacourse/mission-utils";

export const getUserInput = (message) => {
  return Console.readLineAsync(message);
};

export const PrintMessage = (message) => {
  Console.print(message);
};
