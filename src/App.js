import { Console } from "@woowacourse/mission-utils";

const getNumberString = async () => {
  try {
    const numStr = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    return numStr;
  } catch (error) {
    throw new Error(error);
  }
};

class App {
  async run() {
    try {
      const numStr = new NumStr(await getNumberString());
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
