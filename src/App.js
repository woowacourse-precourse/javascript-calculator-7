import { Console } from "@woowacourse/mission-utils";

const REGEX_CUSTOM_SEPARATOR = /\/\/(.*)\\n/;

class App {
  constructor() {
    this.separators = [",", ":"];
  }

  async run() {
    try {
      // 값 입력받기
      let input = await this.getInput();

      // 커스텀 구분자가 있다면
      if (input.match(REGEX_CUSTOM_SEPARATOR)) {
        // 커스텀 구분자 검증
        this.customDelimiterVaildation(input);

        // 커스텀 구분자 처리 (커스텀 구분자 구하고, 커스텀 구분자 설정 부분 자르기)
        input = this.processCustomDelimiter(input);
      }

      // 입력값 구분자로 분할
      const numArr = this.parseInput(input);

      // 분할된 입력값 검증
      this.numberArrValidation(numArr);

      // 입력값 더하기
      const sum = this.sumNumbers(numArr);

      // 합 출력
      this.printSum(sum);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  // 입출력 함수 //

  // 입력 받는 함수
  async getInput() {
    try {
      const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
      return input;
    } catch (error) {
      throw new Error("[ERROR] : 입력 에러가 발생했습니다.");
    }
  }

  // 합 출력 함수
  printSum(sum) {
    Console.print("결과 : " + sum);
  }

  // 검증 함수 //

  // 커스텀 구분자 입력 검증 함수
  customDelimiterVaildation(input) {
    // 커스텀 구분자 설정이 처음에 시작하지 않는 경우
    if (!input.startsWith("//") && input.includes("//") && input.includes("\\n")) {
      throw new Error("[ERROR] : 커스텀 구분자 설정은 맨 앞에 있어야 합니다.");
    }

    const customSeparator = input.match(REGEX_CUSTOM_SEPARATOR)[1]; // 캡처된 구분자

    // 구분자가 1글자가 아닌경우
    if (customSeparator.length !== 1) {
      throw new Error("[ERROR] : 커스텀 구분자는 1글자어야 합니다.");
    }

    // 구분자가 숫자인 경우
    if (customSeparator.match(/\d/)) {
      throw new Error("[ERROR] : 커스텀 구분자는 숫자로 설정할 수 없습니다.");
    }
  }

  // 구분자로 구분한 값들 검증 함수
  numberArrValidation(numArr) {
    // 빈 문자열을 입력했거나 숫자 하나만 입력했으면 스킵
    if (numArr.length !== 1) {
      if (numArr[0] === "") {
        throw new Error("[ERROR] : 구분자로 시작할 수 없습니다.");
      }

      if (numArr[numArr.length - 1] === "") {
        throw new Error("[ERROR] : 구분자로 끝날 수 없습니다.");
      }

      if (numArr.some((num) => num === "")) {
        throw new Error("[ERROR] : 구분자 사이에는 반드시 숫자가 있어야 합니다.");
      }
      if (numArr.some((num) => !Number(num))) {
        throw new Error("[ERROR] : 숫자가 아닌 값이 있습니다.");
      }
      if (numArr.some((num) => Number(num) <= 0)) {
        throw new Error("[ERROR] : 0이나 음수는 입력할 수 없습니다.");
      }
    }
  }

  // 값 처리 함수 //

  // 커스텀 구분자 처리 함수 (커스텀 구분자 구하고, 커스텀 구분자 설정 부분 자르기)
  processCustomDelimiter(input) {
    // 커스텀 구분자 있는 경우
    const customMatch = input.match(REGEX_CUSTOM_SEPARATOR);
    if (customMatch) {
      const customSeparator = customMatch[1]; // 캡처된 구분자
      this.separators.push(customSeparator); // 기존 구분자 배열에 추가
      input = input.replace(REGEX_CUSTOM_SEPARATOR, ""); // 커스텀 구분자 설정 부분 자르기
    }
    return input;
  }

  // 입력값을 구분자들로 나눠 배열로 반환하는 함수
  parseInput(input) {
    // 구분자들로 정규식 생성
    const REGEX_SEPARATOR = new RegExp(this.separators.map((s) => `\\${s}`).join("|"), "g");
    return input.split(REGEX_SEPARATOR);
  }

  // 배열에 저장된 입력값 더하는 함수
  sumNumbers(numArr) {
    return numArr.reduce((acc, current) => acc + Number(current), 0);
  }
}

export default App;
