const MissionUtils = require("@woowacourse/mission-utils"); // 외부 라이브러리인 MissionUtils를 불러옴.

class App {
  async run() {
    this.isStart(); // 프로그램 실행 시 isStart 함수를 호출
  }

  isStart() {
    // MissionUtils를 사용해 사용자가 문자열을 입력할 때까지 대기
    MissionUtils.Console.readLine("덧셈할 문자열을 입력해 주세요.", (input) => {
      let custom = this.getCustom(input);
      let numbers = this.getNumbers(input, custom);
      if (this.ExceptionArray(numbers)) {
        let sum = this.getSum(numbers);
        MissionUtils.Console.print(`결과 : ${sum}`);
      }
    });
  }

  // 커스텀 구분자를 추출하는 함수
  getCustom(message) {
    if (message.includes("//") && message.includes("\n")) {
      let FirstIndex = message.indexOf("//");
      //
      let SecondIndex = message.indexOf("\n");
      // // \n 기준으로 가운데값 추출 ;
      let custom = message.slice(FirstIndex + 2, SecondIndex);
      if (custom.length === 0) {
        throw new Error("[Error] 커스텀 문자가 한개만");
      }
      console.log(custom);
      return custom;
    }
    return /,|:/;
  }

  getNumbers(input, custom) {
    let sliceMessage = input.includes("\n") ? input.split("\n") : input;
    return sliceMessage.split(custom);
  }

  getSum(array) {
    let sum = array.reduce((a, b) => Number(a) + Number(b), 0);
    return sum;
  }

  // 배열 내 요소가 유효한 숫자인지 검사하는 함수
  ExceptionArray(array) {
    for (let i = 0; i < array.length; i++) {
      const num = Number(array[i]); // 요소를 숫자로 변환
      if (!Number.isInteger(num)) {
        // 숫자가 정수가 아닌 경우 에러 발생
        throw new Error("[Error] 숫자만 입력하세요");
      }
      if (num < 0) {
        // 음수가 입력된 경우 에러 발생
        throw new Error("[Error] 음수만 입력하세요");
      }
    }
    // 배열에 있는 모든 숫자가 유효한 경우 true 반환
    return true;
  }
}

export default App;
