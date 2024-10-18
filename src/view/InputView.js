import { Console } from "@woowacourse/mission-utils";

export class InputView {
  static inputString() {
    return Console.readLineAsync("덧셈할 문자열을 입력해 주세요.");
  }
}
