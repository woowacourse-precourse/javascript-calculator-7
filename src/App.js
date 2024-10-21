import { Console } from "@woowacourse/mission-utils";
const MSG = {
  INFORM: "덧셈할 문자열을 입력해 주세요.",
};
class App {
  async run() {
    const res = await this.getUserInput(MSG.INFORM);

    Console.print(`결과 : ${res}`);
  }

  /** 사용자 입력 받기 */
  getUserInput = async (msg) => {
    try {
      const st = await Console.readLineAsync(msg);
      if (typeof st !== "string") {
        throw new Error(MSG.WARN.NO_VALID_INPUT);
      }
      return st;
    } catch (error) {
      throw new Error(MSG.WARN.INPUT_ERROR);
    }
  };
}

export default App;
