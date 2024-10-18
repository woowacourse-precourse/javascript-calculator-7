import { Console } from "@woowacourse/mission-utils";

const add = (inputString) => {
  const separator = /[,:]/;
  const number = inputString.split(separator).map(Number);
  Console.print(number);
};

export default add;
