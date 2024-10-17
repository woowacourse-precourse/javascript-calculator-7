import { Console } from "@woowacourse/mission-utils";

const rl = Console.readLineAsync;

class CalculatorView {
  async inputView() {
    return await this.rl("문자열을 입력하세요:\n");
  }

  async outputView() {
    return await this.rl(`결과: ${RESULT}`);
  }

  errorView() {
    console.error(error.message);
  }

  close() {
    this.rl.close();
  }
}

export default CalculatorView;
