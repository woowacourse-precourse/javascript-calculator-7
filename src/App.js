import { MissionUtils } from "@woowacourse/mission-utils";

const CUSTOM_EXPRESSION = Object.freeze({
  START: "//",
  END: "\\n",
});

class Calculator {
  constructor(defaultSeperators) {
    this.seperators = defaultSeperators;
    this.constantSeperator = ",";
  }

  extractCustomSeperator(input) {
    if (
      input.startsWith(CUSTOM_EXPRESSION.START) &&
      input.includes(CUSTOM_EXPRESSION.END)
    ) {
      const startIndex = CUSTOM_EXPRESSION.START.length;
      const endIndex = input.indexOf(CUSTOM_EXPRESSION.END);
      const customSeperator = input.slice(startIndex, endIndex);

      if (customSeperator.length === 0) {
        throw new Error("[ERROR] 커스텀 구분자의 길이는 0일 수 없습니다.");
      }

      this.setCustomSeperator([
        CUSTOM_EXPRESSION.START + customSeperator + CUSTOM_EXPRESSION.END,
        customSeperator,
      ]);
    }
  }

  setCustomSeperator(customSeperators) {
    this.seperators = [...customSeperators, ...this.seperators];
  }

  replaceAllSeperators(input) {
    let processedInput = input;

    this.seperators.forEach((seperator) => {
      processedInput = processedInput.replaceAll(
        seperator,
        this.constantSeperator
      );
    });

    return processedInput;
  }

  validateInput(input) {
    const inputArray = input
      .split(this.constantSeperator)
      .filter(Boolean)
      .map((num) => {
        try {
          return BigInt(num);
        } catch (error) {
          throw new Error("[ERROR] 정의되지 않은 구분자가 포함되어 있습니다.");
        }
      });

    if (inputArray.some((num) => num <= 0n)) {
      throw new Error("[ERROR] 숫자는 자연수만 입력할 수 있습니다.");
    }

    return inputArray;
  }

  sumAll(inputArray) {
    return inputArray.reduce((sum, num) => sum + num, 0n);
  }
}

class Console {
  async read(input) {
    return MissionUtils.Console.readLineAsync(input);
  }

  print(input) {
    return MissionUtils.Console.print(input);
  }
}

class App {
  constructor() {
    this.calculator = new Calculator([",", ":"]);
    this.console = new Console();
  }

  async run() {
    const userInput = await this.console.read("덧셈할 문자열을 입력해 주세요.");
    this.calculator.extractCustomSeperator(userInput);
    const processedInput = this.calculator.replaceAllSeperators(userInput);
    const validInputArray = this.calculator.validateInput(processedInput);

    const sum = this.calculator.sumAll(validInputArray);
    this.console.print(`결과 : ${sum}`);
  }
}

export default App;
