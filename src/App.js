import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const INPUTTED_NUMBER = await Console.readLineAsync('덧셈할 문자열을 입력하세요:\n');
    console.log('입력한 값은:', INPUTTED_NUMBER);
  }
}

export default App;