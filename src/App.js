import { MissionUtils } from "@woowacourse/mission-utils";

async function getText() {
  try {
    const input = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');
    console.log(input);
    return input;
  } catch (error) {
  }
};

class App {
  async run() {
    const input = await getText();
  }
}

export default App;
