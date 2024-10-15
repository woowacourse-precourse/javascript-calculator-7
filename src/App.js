import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const inputString = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요\n"
    );

    const separatedInputArray = inputString.split(/[,:]/g);

    const answerNumber = separatedInputArray.reduce((acc, cur) => {
      if (Number(cur) === NaN) {
        throw new Error("[ERROR] 숫자가 아닌 값을 입력했습니다");
      }
      if (Number(cur) < 0) {
        throw new Error("[ERROR] 음수를 입력했습니다");
      }

      return acc + Number(cur);
    }, 0);

    Console.print(`결과 : ${answerNumber}`);
  }
}

export default App;
