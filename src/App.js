import { Console } from "@woowacourse/mission-utils";

// let separators = [",", ":"];
const REGEX_CUSTOM_SEPARATOR = /^\/\/(.*)\\n/;

class App {
  constructor() {
    this.separators = [",", ":"];
  }

  async run() {
    try {
      // 값 입력받기
      const input = await this.getInput();
      const validateinput = this.customDelimiterVaildation(input);

      // 구분자들로 정규식 생성
      const REGEX_SEPARATOR = new RegExp(this.separators.map((s) => `\\${s}`).join("|"), "g");
      //const REGEX_SEPARATOR = this.separators.map((s) => `\\${s}`).join("|");
      Console.print(`delimiter: ${REGEX_SEPARATOR}`);
      Console.print(`input : ${validateinput}`);

      this.delimiterPositionValidation(validateinput, REGEX_SEPARATOR);

      const numArr = validateinput.split(REGEX_SEPARATOR);
      Console.print(numArr);
      this.numberArrValidation(numArr);

      const sum = numArr.reduce((acc, current) => acc + Number(current), 0);
      Console.print("결과 : " + sum);
    } catch (error) {
      Console.print(error);
    }
  }

  async getInput() {
    try {
      const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
      return input;
    } catch (error) {
      throw new Error("[ERROR] : 입력 에러가 발생했습니다.");
    }
  }

  numberArrValidation(numArr) {
    if (numArr.some((num) => num === "")) {
      throw new Error("[ERROR] : 구분자 사이에는 반드시 숫자가 있어야 합니다.");
    }
    if (numArr.some((num) => !Number(num))) {
      throw new Error("[ERROR] : 숫자가 아닌 값이 있습니다.");
    }
    if (numArr.some((num) => Number(num) < 0)) {
      throw new Error("[ERROR] : 음수는 입력할 수 없습니다.");
    }
  }

  delimiterPositionValidation(input, regex) {
    if (regex.test(input[0])) {
      throw new Error("[ERROR] : 구분자로 시작할 수 없습니다.");
    }
    if (regex.test(input[input.length - 1])) {
      throw new Error("[ERROR] : 구분자로 끝날 수 없습니다.");
    }
  }

  customDelimiterVaildation(input) {
    // 커스텀 구분자 설정이 처음에 시작하지 않는 경우
    if (!input.startsWith("//") && input.includes("//") && input.includes("\\n")) {
      throw new Error("[ERROR] : 커스텀 구분자 설정은 맨 앞에 있어야 합니다.");
    }

    // 커스텀 구분자 설정이 처음에 있는 경우
    const customMatch = input.match(REGEX_CUSTOM_SEPARATOR);
    if (customMatch) {
      const customSeparator = customMatch[1]; // 캡처된 구분자
      Console.print(`capture : ${customSeparator}`);

      // 구분자가 1글자가 아닌경우
      if (customSeparator.length !== 1) {
        throw new Error("[ERROR] : 커스텀 구분자는 1글자어야 합니다.");
      }

      // 구분자가 숫자인 경우
      if (customSeparator.match(/\d/)) {
        throw new Error("[ERROR] : 커스텀 구분자는 숫자로 설정할 수 없습니다.");
      }

      this.separators.push(customSeparator); // 기존 구분자 배열에 추가
      input = input.replace(REGEX_CUSTOM_SEPARATOR, "");
      Console.print(this.separators);
    }

    return input;
  }
}

export default App;
