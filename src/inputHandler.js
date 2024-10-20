import { MissionUtils } from "@woowacourse/mission-utils";

const inputHandler = async () => {
  try {
    const userInput = await MissionUtils.Console.readLineAsync(
      "덧셈할 문자열을 입력해주세요.\n"
    );

    if (userInput === "") {
      return "0-empty";
    }

    if (userInput.trim() === "") {
      throw new Error("공백 입력은 허용되지 않습니다.");
    }

    return userInput;
  } catch (error) {
    throw error;
  }
};

export default inputHandler;
