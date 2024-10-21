import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async run() {
    let inputString = await MissionUtils.Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    let numberArray;

    // 커스텀구분자 확인
    if (inputString.startsWith("//")) {
      // 커스텀구분자 찾기
      const lines = inputString.split("\\n");
      // 숫자가 뒤에 붙었는지 확인
      if (lines.length < 2 || !lines[1] || lines[1].trim() === "") {
        throw new Error(
          "[ERROR] 커스텀구분자 뒤 숫자가 없습니다. 프로그램을 종료합니다."
        );
      }
      const delimiter = inputString.charAt(2);
      numberArray = lines[1].split(delimiter);
    }

    // 기본구분자 확인
    else if (
      !inputString ||
      inputString.trim() === "" ||
      inputString.split(/[,:]/).length === 1
    ) {
      throw new Error(
        "[ERROR] 입력값이 없거나 구분자가 없습니다. 프로그램을 종료합니다."
      );
    } else numberArray = inputString.split(/[,:]/);

    for (let value of numberArray) {
      value = Number(value);
      if (Number.isNaN(value)) {
        throw new Error(
          "[ERROR] 구분자로 나뉘어진 값이 숫자로만 이루어져 있지 않습니다. 프로그램을 종료합니다."
        );
      } else if (value < 0) {
        throw new Error(
          "[ERROR] 구분자로 나뉘어진 값에 음수가 있습니다. 프로그램을 종료합니다."
        );
      }
    }

    const sum = numberArray.reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue),
      0
    );
    MissionUtils.Console.print(`결과 : ${sum}`);
  }
}
export default App;
