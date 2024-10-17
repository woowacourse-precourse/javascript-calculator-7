const MissionUtils = require("@woowacourse/mission-utils");
class App {
  async run() {
    this.isStart();
  }
  isStart() {
    MissionUtils.Console.readLine("덧셈할 문자열을 입력해 주세요.", (input) => {
      if (input.include("// \n")) {
        let custom = this.CustomMessage(input); // => ;를 기준으로 split
        // // \n 지우기
        let sliceMessage = this.MessageSlice(input);
        sliceMessage.split("custom");
      } else {
        this.NotCustomMessage(input);
      }
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
  MessageSlice(message) {
    const firstIndex = message.indexOf("//");
    const secondIndex = message.indexOf("\n");
    if (
      message.includes(firstIndex) &&
      message.includes(secondIndex) &&
      firstIndex < secondIndex
    ) {
      return message.slice(0, firstIndex) + message.slice(secondIndex + 1);
    }
    return message;
  }
}

export default App;
