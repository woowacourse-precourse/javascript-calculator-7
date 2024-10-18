import { Console } from "@woowacourse/mission-utils";

class CalculatorView {
  async inputView() {
    return await Console.readLineAsync("문자열을 입력하세요:\n");
  }

  outputView() {
    Console.print(`결과 : ${RESULT}`);
  }

  errorView(error) {
    console.error(error.message);
  }
}

export default CalculatorView;
