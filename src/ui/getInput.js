import { Console } from "@woowacourse/mission-utils";

const getInput = async () => {
  const input = await new Promise((resolve) => {
    Console.readLine("", (userInput) => {
      resolve(userInput);
    });
  });
  return input;
};

export default getInput;
