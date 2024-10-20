import { MissionUtils } from "@woowacourse/mission-utils";

export default async function getInputString() {
  const inputString = await MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
  return inputString;
}

