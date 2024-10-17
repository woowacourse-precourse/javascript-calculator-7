const MissionUtils = require("@woowacourse/mission-utils");
class App {
  async run() {
    this.isStart();
  }
  isStart() {
    MissionUtils.Console.readLine("덧셈할 문자열을 입력해 주세요.", (input) => {
      if (input.includes("//\n")) {
        //예외처리 => // \n사이의 문자가 한개가 맞는지

        let custom = this.CustomMessage(input); // => ;를 기준으로 split
        // // \n 지우기
        let sliceMessage = this.MessageSlice(input);
        sliceMessage = sliceMessage.split(custom);

        let sum = sliceMessage.reduce((a, b) => Number(a) + Number(b), 0);
        MissionUtils.Console.print(`결과 : ${sum}`);
      } else {
        // 예외처리 => /,|:/
        let FirstSplit = input.split(/,|:/);
        let sum = FirstSplit.reduce((a, b) => Number(a) + Number(b), 0);
        MissionUtils.Console.print(`결과 : ${sum}`);
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
    if (firstIndex !== -1 && secondIndex !== -1 && firstIndex < secondIndex) {
      return message.slice(0, firstIndex) + message.slice(secondIndex + 1);
    }
    return message;
  }
  // 배열인지 검사하는 함수
  ExceptionA(array) {
    for (let i = 0; i < array.length; i++) {
      const num = Number(array[i]);
      if (!Number.isInteger(num)) {
        throw new Error("[Error] 숫자만 입력하세요");
      }
      if (num < 0) {
        throw new Error("[Error] 음수만 입력하세요");
      }
    }
  }
  ExceptionB(custom) {
    if (custom.length !== 1) {
      throw new Error("[Error] 커스텀 문자사이 하나만 입력하세요");
    }
  }
  ExceptionC(custom) {
    if (custom !== "," && custom !== ":") {
      throw new Error("[Error] 숫자 사이에 , : 로 구분해주세요");
    }
  }
}

export default App;
