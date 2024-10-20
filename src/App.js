import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async run() {
    let inputString = await MissionUtils.Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    if (
      !inputString ||
      inputString.trim() === "" ||
      inputString.split(/[,:]/).length === 1
    ) {
      throw new Error(
        "[ERROR] 입력값이 없거나 구분자가 없습니다. 프로그램을 종료합니다."
      );
    }

    inputString = inputString.split(/[,:]/);

    for (let value of inputString) {
      value = Number(value);
      if (Number.isNaN(value)) {
        throw new Error(
          "[ERROR] 입력값이 숫자가 아닙니다. 프로그램을 종료합니다."
        );
      } else if (value < 0) {
        throw new Error("[ERROR] 입력값이 음수입니다. 프로그램을 종료합니다.");
      }
    }

    const sum = inputString.reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue),
      0
    );
    MissionUtils.Console.print(`결과 : ${sum}`);
  }
}
export default App;
