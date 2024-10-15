import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.seperators = [",", ":"];
  }

  async run() {
    const userInput = await this.getUserInput();
    this.getCustomSeperator(userInput);
    const processedInput = this.replaceAllSeperators(
      userInput,
      this.seperators
    );
    const validInputArray = this.validateInput(processedInput);

    const sum = this.sumAll(validInputArray);
    this.print(`결과 : ${sum}`);
  }

  async read(input) {
    return MissionUtils.Console.readLineAsync(input);
  }

  print(input) {
    return MissionUtils.Console.print(input);
  }

  async getUserInput() {
    return await this.read("덧셈할 문자열을 입력해 주세요.");
  }

  getCustomSeperator(input) {
    const CUSTOM_SEPERATOR_START = "//";
    const CUSTOM_SEPERATOR_END = "\\n";

    if (
      input.startsWith(CUSTOM_SEPERATOR_START) &&
      input.includes(CUSTOM_SEPERATOR_END)
    ) {
      const startIndex = CUSTOM_SEPERATOR_START.length;
      const endIndex = input.indexOf(CUSTOM_SEPERATOR_END);

      const customSeperator = input.slice(startIndex, endIndex);

      if (customSeperator.length === 0) {
        throw new Error("[ERROR] 커스텀 구분자의 길이는 0일 수 없습니다.");
      }

      this.seperators.unshift(
        CUSTOM_SEPERATOR_START + customSeperator + CUSTOM_SEPERATOR_END,
        customSeperator
      );
    }
  }

  replaceAllSeperators(input, seperators) {
    let processedInput = input;
    const DEFAULT_SEPERATOR = ",";

    seperators.forEach((seperator) => {
      processedInput = processedInput.replaceAll(seperator, DEFAULT_SEPERATOR);
    });

    return processedInput;
  }

  validateInput(input) {
    const inputArray = input.split(",").filter(Boolean).map(Number);

    if (inputArray.some(isNaN)) {
      throw new Error("[ERROR] 정의되지 않은 구분자가 포함되어 있습니다.");
    }

    if (inputArray.some((num) => num <= 0)) {
      throw new Error("[ERROR] 숫자는 자연수만 입력할 수 있습니다.");
    }

    return inputArray;
  }

  sumAll(inputArray) {
    let sum = 0;

    for (let num of inputArray) {
      sum += num;
    }

    return sum;
  }
}

export default App;
