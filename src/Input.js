import { MissionUtils } from "@woowacourse/mission-utils";

// 사용자 문자열 입력 함수
export async function inputUserString() {
  const userInput = await MissionUtils.Console.readLineAsync(
    "덧셈할 문자열을 입력해 주세요.\n"
  );
  return userInput;
}
