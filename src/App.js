import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      const result = this.calculate(input);
      MissionUtils.Console.print(`결과 : ${result}`);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return;
    }
  }

  calculate(input) {
    if (input === "") {
      return 0;  // 공백 문자열 처리
    }
    return input;  
  }
}

export default App;
