import { Console } from "@woowacourse/mission-utils";

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

    function findMinus(userInput) {
      const minusRegex = /-\d+/g;
      let minusString = userInput.match(minusRegex);
      return minusString;
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
      if (findMinus(userInput) !== null) {
        throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
      }
      let sum = getSum(result_custom);
      Console.print(`결과 : ${sum}`);
      return;
    }
  }
}

export default App;
