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
        // 커스텀 구분자 추출
        let custom = this.CustomMessage(input);

        // 문자열에서 //과 \n을 제거하고 구분자를 기준으로 나눔
        let sliceMessage = this.MessageSlice(input);
        sliceMessage = sliceMessage.split(custom); // 추출한 커스텀 구분자로 문자열을 분리

        // 배열에 포함된 요소들이 유효한 숫자인지 확인
        if (this.ExceptionArray(sliceMessage)) {
          // 모든 숫자를 합산
          let sum = sliceMessage.reduce((a, b) => Number(a) + Number(b), 0);
          MissionUtils.Console.print(`결과 : ${sum}`); // 결과 출력
        }
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
    const FirstSplit = message.split("\n")[0]; // 문자열을 \n을 기준으로 나누어 첫 번째 줄 추출
    const SecondSplit = FirstSplit.split("//")[1]; // 첫 번째 줄에서 // 이후의 문자열 추출

    return SecondSplit; // 커스텀 구분자를 반환
  }

  // 입력된 문자열에서 //와 \n을 제거한 후 나머지 부분을 반환하는 함수
  MessageSlice(message) {
    const firstIndex = message.indexOf("//"); // //의 시작 위치 확인
    const secondIndex = message.indexOf("\n"); // \n의 위치 확인

    // //와 \n 사이에 유효한 문자열이 있는지 확인 후, 그 이후의 문자열만 반환
    if (firstIndex !== -1 && secondIndex !== -1 && firstIndex < secondIndex) {
      return message.slice(secondIndex + 1); // \n 이후의 내용만 반환
    }
    return message; // 커스텀 구분자가 없는 경우 원본 메시지를 그대로 반환
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
