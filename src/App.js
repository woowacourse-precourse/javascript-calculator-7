import { Console } from "@woowacourse/mission-utils";
import Messages from "./constants/Messages.js";
import Errors from "./constants/Errors.js";

class App {
  async run() {
    // 입력 메세지 출력 및 입력 받기
    const INPUT = await Console.readLineAsync(Messages.INPUT_MESSAGE);

    // 입력 받은 문자열을 숫자로 변환
    const numbers = INPUT.split(/[, :]/).map(Number);

    //에러처리
    // 숫자가 아닌 문자열이 포함되어 있는 경우
    if (numbers.some((number) => isNaN(Number(number)))) {
      throw new Error(Errors.NOT_NUMBER);
    }
  }
}

export default App;
