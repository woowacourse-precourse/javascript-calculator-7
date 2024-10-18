import { Console } from "@woowacourse/mission-utils";

class CalculatorView {
  async inputView() {
    return await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
  }

  outputView(RESULT) {
    Console.print(`결과 : ${RESULT}`);
  }

  errorView(error) {
    console.error(error.message);
  }
}

export default CalculatorView;
