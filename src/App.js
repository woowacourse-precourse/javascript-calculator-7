import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      let inputValue = String(
        await Console.readLineAsync("덧셈 계산을 위한 문자열을 입력해주세요 : ")
      ).trim();

      if (!inputValue) {
        Console.print(`결과 : ${0}`);
        return;
      } else if (
        inputValue.split("")[0] === ";" ||
        inputValue.split("")[0] === "," ||
        inputValue.split("")[0] === ":" ||
        inputValue.split("")[0] === "|"
      ) {
        throw Error("[ERROR] 구분자가 먼저 입력될 수 없습니다.");
      } else if (
        !inputValue.startsWith("//") &&
        !/^[\d,|;:\- ]+$/.test(inputValue)
      ) {
        throw Error(
          "[ERROR] 잘못된 입력입니다. 숫자와 구분자를 정확하게 입력해주세요."
        );
      } else if (/[,|;:]{2,}/.test(inputValue) || /[ ]{3,}/.test(inputValue)) {
        throw Error(
          "[ERROR] 구분자를 2번이상 연속으로 반복하여 입력할 수 없습니다."
        );
      } else {
        const allNumbers = /^\/\//.test(inputValue)
          ? inputValue.split("\\n")[1].split(/[,|;: ]+/)
          : inputValue.split(/[,|;: ]+/);
        allNumbers.map((numStr) => {
          const num = Number(numStr);
          if (num < 0 || isNaN(num)) {
            throw Error("[ERROR] 음수를 입력할 수 없습니다.");
          }
        });
      }

      const CUSTOM_PATTERN = /^\/\//;
      const isCustom = CUSTOM_PATTERN.test(inputValue);

      const extractCustomDelimiter = (inputValue) => {
        const inputSplit = inputValue.split("\\n");
        const customDelimiter = inputSplit[0].replace("//", "");
        const customDelimiterNums = inputSplit[1];
        const customStringArray = customDelimiterNums.split(customDelimiter);
        const customNumbersArray = customStringArray.map(Number);
        return customNumbersArray;
      };

      const extractGeneralDelimiter = (inputValue) => {
        const generalStringArray = inputValue.split(/[,|;: ]+/);
        const generalNumbersArray = generalStringArray.map(Number);
        return generalNumbersArray;
      };

      const sum = (numbersArray) => {
        return numbersArray.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0
        );
      };

      if (isCustom) {
        const customNumbersArray = extractCustomDelimiter(inputValue);
        const customResult = sum(customNumbersArray);
        Console.print(`결과 : ${customResult}`);
      } else {
        const generalNumbersArray = extractGeneralDelimiter(inputValue);
        const generalResult = sum(generalNumbersArray);
        Console.print(`결과 : ${generalResult}`);
      }
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
