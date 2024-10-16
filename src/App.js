// import Console from "../node_modules/@woowacourse/mission-utils/src/console.js";
import { Console } from "@woowacourse/mission-utils";

// [x] 문자열 커스텀 구분자 처리
// [x] 숫자와 구분자 제외한 문자 제거
// [x] 콜론과 콤마를 구분자로 사용하여 배열로 변환
// [x] 각 요소들 숫자로 변환하여 합산
// [x] 결과 출력

class App {
  async run() {
    let userInput = await Console.readLineAsync("문자열을 입력해주세요: ");

    function customIdentifer(userInput) {
      const customRegex = /\/\/(.)\\n/;
      let customString = userInput.match(customRegex);

      if (customString === null) {
        return userInput;
      } else {
        const targetCustom = customString[1];

        let filteredUserInput = userInput.replaceAll(targetCustom, ",");

        return filteredUserInput;
      }
    }

    function getSum(userInput) {
      let sum = 0;
      const targetRegex = /[^0-9:,]/g;
      let targetString = userInput.replace(targetRegex, "");
      let splitedString = targetString.split(/[:,]/);

      splitedString.forEach((element) => {
        let number = parseInt(element);
        if (isNaN(number)) {
          number = 0;
        }
        sum += number;
      });

      return sum;
    }

    if (userInput === "") {
      Console.print(0);
      return;
    } else {
      let result_custom = customIdentifer(userInput);
      let sum = getSum(result_custom);
      Console.print(`결과 : ${sum}`);
      return;
    }
  }
}

export default App;
