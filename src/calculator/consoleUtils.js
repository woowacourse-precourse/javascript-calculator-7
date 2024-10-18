import { Console } from "@woowacourse/mission-utils";

const consoleUtils = async () => {
  try {
    Console.print("덧셈할 문자열을 입력해 주세요.");
    await Console.readLineAsync("");
  } catch (error) {}
};

export default consoleUtils;
