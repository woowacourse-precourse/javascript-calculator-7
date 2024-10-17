import { Console } from "@woowacourse/mission-utils";

class CalculatorView {
  async inputView() {
    return await Console.readLineAsync("문자열을 입력하세요:\n");
  }

  async outputView() {
    return await Console.readLineAsync(`결과: ${RESULT}`);
  }

  errorView() {
    console.error(error.message);
  }
}
