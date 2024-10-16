import Console from "../node_modules/@woowacourse/mission-utils/src/console.js";
// import { Console } from "@woowacourse/mission-utils";

// [x] 문자열 커스텀 식별자 처리
// [ ] 숫자와 식별자 제외한 문자 제거
// [ ] 콜론과 콤마를 구분자로 사용하여 배열로 변환
// [ ] 각 요소들 숫자로 변환하여 합산
// [ ] 결과 출력

class App {
  async run() {
    let userInput = await Console.readLineAsync("문자열을 입력해주세요: ");

    function customIdentifer(userInput) {
      const customRegex = /\/\/(.)\\n/;

      let customString = userInput.match(customRegex);
      // Console.print(customString);
      const targetCustom = customString[1];

      let filteredUserInput = userInput.replaceAll(targetCustom, ",");
      // Console.print(filteredUserInput);

      return filteredUserInput;
    }

    let result_custom = customIdentifer(userInput);
    Console.print(result_custom);
  }
}

export default App;
