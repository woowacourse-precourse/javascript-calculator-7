import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 결과값 변수
    let result = 0;

    // 사용자 입력값을 받는다.
    const input = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
   
  }
  
}

export default App;