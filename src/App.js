import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.separators = [",", ":"]; // 기본 구분자
  }

  async run() {
    let input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");

    // 입력이 비어있으면 0 출력
    if (this.isEmptyInput(input)) {
      Console.print("결과 : 0");
      return;
    }

    const customSeparator = this.getCustomSeparator(input);
    if (customSeparator) {
      input = this.removeCustomSeparatorDefinition(input); // 커스텀 구분자 제거
    }

    this.validateInput(input, customSeparator); // 입력 검증

    const numbersAsString = this.replaceSeparators(input, customSeparator);
    const inputList = numbersAsString.split(","); // 쉼표로 나누기
    this.validateNumbers(inputList, customSeparator); // 숫자 검증

    Console.print(`결과 : ${inputList}`);
  }

  isEmptyInput(input) {
    return input.trim() === ""; // 비어있음 체크
  }

  getCustomSeparator(input) {
    if (input.startsWith("//")) {
      const separator = input.split("\\n")[0].slice(2); // 커스텀 구분자 가져오기
      if (separator.length !== 1) {
        throw new Error("[ERROR] 커스텀 구분자는 한 글자여야 합니다."); // 오류 처리
      }
      return separator.charAt(0); // 첫 글자 반환
    }
    return null; // 없으면 null 반환
  }

  removeCustomSeparatorDefinition(input) {
    return input.split("\\n").slice(1).join("\n"); // 첫 줄 제거
  }

  validateInput(input, customSeparator) {
    if (customSeparator && !Number.isNaN(Number(customSeparator))) {
      throw new Error("[ERROR] 숫자는 구분자로 사용할 수 없습니다.");
    }
    if (this.isEmptyInput(input)) {
      throw new Error("[ERROR] 구분자의 앞 또는 뒤에 숫자가 없습니다.");
    }
    if (/\s/.test(input.replace("\n", ""))) {
      throw new Error("[ERROR] 공백을 포함한 숫자는 허용되지 않습니다.");
    }
  }

  replaceSeparators(input, customSeparator) {
    let result = input;
    const allSeparators = [...this.separators]; // 모든 구분자

    if (customSeparator) {
      allSeparators.push(customSeparator); // 커스텀 구분자 추가
    }

    allSeparators.forEach((separator) => {
      result = result.split(separator).join(","); // 쉼표로 변환
    });

    return result; // 변환된 문자열 반환
  }

  validateNumbers(inputList, customSeparator) {
    if (inputList.some((num) => num === "")) {
      throw new Error("[ERROR] 구분자의 앞 또는 뒤에 숫자가 없습니다.");
    }

    const trimmedNumbers = inputList.map((num) => num.trim()); // 공백 제거

    if (trimmedNumbers.some((num) => Number.isNaN(Number(num)) && num !== "")) {
      if (!customSeparator) {
        throw new Error("[ERROR] 기본 구분자 외의 문자가 사용되었습니다.");
      } else {
        throw new Error("[ERROR] 입력된 값 중 숫자가 아닌 항목이 있습니다.");
      }
    }

    if (trimmedNumbers.some((num) => +num < 0)) {
      throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
    }
  }
}

export default App;
