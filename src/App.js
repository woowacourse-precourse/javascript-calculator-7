const MissionUtils = require("@woowacourse/mission-utils");
class App {
  async run() {
    this.isStart();
  }
  isStart() {
    MissionUtils.Console.readLine("덧셈할 문자열을 입력해 주세요.", (input) => {
      const custom = this.CustomMessage(input);
    });
  }
  // 커스텀 문자의 여부를 파악하는 함수 => // \n
  CustomMessage(message) {
    const FirstSplit = message.split("\n")[0];
    // 문자를 \n 기준으로 쪼갬 => ["//@", "123"]
    const SecondSplit = FirstSplit.split("//")[1];
    // 배열의 0번째 인덱스를 기준으로  //를 없애고 출력
    return SecondSplit;
    // ;
  }
}

export default App;
