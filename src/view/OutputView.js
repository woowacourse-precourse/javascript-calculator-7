import { Console } from "@woowacourse/mission-utils";

export class OutputView {
  static sum(sum) {
    return Console.print(`결과 : ${sum}`);
  }

  static error(errorMessage) {
    return Console.print(`[ERROR]${errorMessage}`);
  }
}
