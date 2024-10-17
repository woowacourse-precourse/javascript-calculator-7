import { MissionUtils } from "@woowacourse/mission-utils";
const Console = MissionUtils.Console;

class App {
  async run() {
    Console.print(
      this.add(
        this.processInput(
          await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.")
        )
      )
    ); // 1단계: 그대로 출력
  }
  processInput(inputstr) {
    const condCustomInput = /\/\/[^0-9]+\\n.+/g;
    const condCustomSep = /[^\/\\n]+/g; // exec()[0]의 결과가 seperator
    const condSepValid = /[^0-9]+/g;
    const condAbnormalFormat = /[^0-9,:]+/g;
    // 커스텀 구분자가 있는지 확인
    if (
      condCustomInput.test(inputstr) &&
      condSepValid.test(inputstr.match(condCustomSep)[0]) // Note:이건 구분자가 적절한지(숫자 미포함인지) 확인하는 코드
    ) {
      // 커스텀 구분자가 있을 경우
      const expList = inputstr.match(condCustomSep);
      if (expList.length !== 2) throw new Error("[ERROR]: 잘못된 포맷입니다.");
      const intermediate = expList[1]
        .split(expList[0])
        .map((value) =>
          value.split(RegExp(["(\\", expList[0], "|:|,)"].join(""), "g"))
        )
        .reduce((prev, curr) => prev.concat(curr), [])
        .filter((value) => value !== ":" && value !== ",");
      if (intermediate.some((value) => RegExp("[^0-9]+", "g").test(value)))
        throw new Error("[ERROR]: 잘못된 연산식이 들어왔습니다.");
      return intermediate.map((value) => parseInt(value));
    } else if (!condAbnormalFormat.test(inputstr)) {
      // 커스텀 구분자가 없으며 포맷에 맞는 경우 정해진 값대로 split
      return inputstr
        .split(/(:|,)/g)
        .filter((value) => !isNaN(value))
        .map((value) => parseInt(value));
    } else {
      // 잘못된 입력
      throw new Error("[ERROR]: 잘못된 포맷입니다.");
    }
  }
}

export default App;
