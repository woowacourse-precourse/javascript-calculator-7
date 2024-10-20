import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    let userInput = await Console.readLineAsync("문자열을 입력해주세요: ");
    let result = 0;

    function checkCustomIdentifier(userInput) {
      const customRegex = /\/\/(.*)\\n/;
      const customString = userInput.match(customRegex);
      let customIdentifier = "";

      if (customString === null) {
        return userInput;
      } else {
        customIdentifier = customString[1];

        if (customIdentifier.length > 1) {
          throw new Error("[ERROR] 커스텀 구분자는 1자리여야 합니다.");
        }
        if (!isNaN(customIdentifier)) {
          throw new Error("[ERROR] 커스텀 구분자는 문자여야 합니다.");
        }

        if (customIdentifier === ":" || customIdentifier === ",") {
          throw new Error("[ERROR] 기본 구분자와 중복됩니다.");
        }
      }
      return customIdentifier;
    }

    function checkMinus(userInput) {
      const minusRegex = /-\d+/g;
      let minusString = userInput.match(minusRegex);
      if (minusString === null) {
        return userInput;
      } else {
        throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
      }
    }

    function calculateSum(userInput) {
      const targetRegex = /[^0-9:,]/g;
      let sum = 0;

      userInput = userInput.replace(targetRegex, "");

      const splitedInput = userInput.split(/[:,]/);
      splitedInput.map((element) => {
        if (element !== "") {
          element = parseInt(element);
          sum += element;
        }
      });

      return sum;
    }

    if (userInput === "") {
      Console.print(0);
      return;
    } else {
      checkMinus(userInput);
      if (userInput === checkCustomIdentifier(userInput)) {
        result = calculateSum(userInput);
        Console.print(`결과 : ${result}`);
      } else {
        userInput = userInput.replaceAll(checkCustomIdentifier(userInput), ",");
        result = calculateSum(userInput);
        Console.print(`결과 : ${result}`);
      }
    }
  }
}

export default App;
