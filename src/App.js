const MissionUtils = require("@woowacourse/mission-utils"); // 외부 라이브러리인 MissionUtils를 불러옴.

class App {
  async run() {
    this.isStart(); // 프로그램 실행 시 isStart 함수를 호출
  }

  isStart() {
    // MissionUtils를 사용해 사용자가 문자열을 입력할 때까지 대기
    MissionUtils.Console.readLine("덧셈할 문자열을 입력해 주세요.", (input) => {
      // 입력받은 문자열에 커스텀 구분자가 포함된 경우 처리 (//와 \n이 있는지 확인)
      if (input.includes("//") && input.includes("\n")) {
        MissionUtils.Console.print(`결과 : ${this.CustomMessage(input)}`);
      } else {
        // 커스텀 구분자가 없으면 기본 구분자인 , 또는 :를 기준으로 문자열을 분리
        let FirstSplit = input.split(/,|:/);

        // 배열에 포함된 요소들이 유효한 숫자인지 확인
        if (this.ExceptionArray(FirstSplit)) {
          // 모든 숫자를 합산
          let sum = FirstSplit.reduce((a, b) => Number(a) + Number(b), 0);
          MissionUtils.Console.print(`결과 : ${sum}`);
        }
      }
    });
  }

  // 커스텀 구분자를 추출하는 함수
  CustomMessage(message) {
    let FirstIndex = message.indexOf("//");
    //
    let SecondIndex = message.indexOf("\n");

    if (FirstIndex !== -1 && SecondIndex !== -1 && FirstIndex < SecondIndex) {
      // \n 이후의 내용만 잘라서 반환
      let sliceMessage = message.slice(SecondIndex + 1);
      console.log(sliceMessage);

      // // \n 기준으로 가운데값 추출 ;
      let custom = message.slice(FirstIndex + 2, SecondIndex);
      console.log(custom);

      //
      let newArray = sliceMessage.split(custom);
      console.log(newArray);

      let sum = newArray.reduce((a, b) => Number(a) + Number(b), 0);
      return sum;
    }
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
