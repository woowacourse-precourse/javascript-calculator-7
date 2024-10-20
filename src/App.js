import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    let userInput = await Console.readLineAsync("문자열을 입력해주세요: ");
    let result = 0;

    function checkCustomIdentifier(userInput) {
      const CUSTOM_REGEX = /\/\/(.*)\\n/;
      const CUSTOM_STRING = userInput.match(CUSTOM_REGEX);
      let customIdentifier = "";

      if (CUSTOM_STRING === null) {
        return userInput;
      } else {
        customIdentifier = CUSTOM_STRING[1];

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
      const MINUS_REGEX = /-\d+/g;
      const MINUS_STRING = userInput.match(MINUS_REGEX);
      if (MINUS_STRING === null) {
        return userInput;
      } else {
        throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
      }
    }

    function calculateSum(userInput) {
      const TARGET_REGEX = /[^0-9:,]/g;
      let sum = 0;

      userInput = userInput.replace(TARGET_REGEX, "");

      const SPLITED_INPUT = userInput.split(/[:,]/);
      SPLITED_INPUT.map((element) => {
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
