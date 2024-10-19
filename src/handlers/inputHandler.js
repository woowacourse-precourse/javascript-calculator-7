import { Console } from "@woowacourse/mission-utils";
export const inputHandler = async () => {
  Console.print("덧셈할 문자열을 입력해 주세요.");
  const INPUT = Console.readLineAsync("");
  return INPUT;
};
