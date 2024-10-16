import { Console } from "@woowacourse/mission-utils";
import StringCalculator from "./StringCalculator";

const getInputString = async () => {
  try {
    const numStr = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    return numStr;
  } catch (error) {
    throw new Error(`[ERROR] ${error.message}`);
  }
};

class App {
  async run() {
    try {
      const inputStr = await getInputString();
      const calculator = new StringCalculator(inputStr);
      const sum = calculator.calculateSum();
      Console.print(`결과 : ${sum}`);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default App;
