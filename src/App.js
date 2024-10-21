import { Console } from "@woowacourse/mission-utils";

class App {
  // 2. 구분자 찾기
  findDelimiter(input) {
    const hasCustomDelimeter =
      input.trim().startsWith("//") && input.includes("\\n");

    const isCustomDelimiter = () => {
      hasCustomDelimeter
        ? this.validateDelimiter(input)
        : this.splitByDefaultDelimiter(input);
    };

    isCustomDelimiter();
  }

  // 2-1 구분자 검증
  validateDelimiter(input) {
    const startDelimiter = Number(input.indexOf("//"));
    const endDelimiter = Number(input.indexOf("\\n"));
    const customDelimiter = input.slice(startDelimiter + 2, endDelimiter);
    const withoutCustomDelimiter = input.slice(endDelimiter + 2);

    Console.print(
      "startDelimiter" + startDelimiter + "endDelimeter" + endDelimiter
    );
    Console.print(
      "customDelimiter: " +
        customDelimiter +
        " withoutCustomDelimiter : " +
        withoutCustomDelimiter
    );
    this.splitByCustomDelimiter(withoutCustomDelimiter, customDelimiter);

    // this.splitByCustomDelimiter();
  }

  // 3. 구분자로 문자 분리하기 - 커스텀 구분자
  splitByCustomDelimiter(withoutCustomDelimiter, customDelimiter) {
    Console.print(
      "customDelimeter: " +
        customDelimiter +
        " input: " +
        withoutCustomDelimiter
    );

    const onlyInput = withoutCustomDelimiter.split(customDelimiter);

    Console.print(onlyInput);

    this.validateStringInput(onlyInput);
  }

  splitByDefaultDelimiter(input) {
    // 기본 구분자
    const withoutCommaInput = input.replace(",", ":");
    const onlyInput = withoutCommaInput.split(":");
    Console.print(onlyInput);

    this.validateStringInput(onlyInput);
  }

  // 4. 분리한 문자 검증
  validateStringInput(onlyInput) {
    // 변수.map((el) => typeof Number(변수) === number);
    const numberInput = onlyInput.map((e) => Number(e));

    this.sumPositiveNumber(numberInput);
  }

  // 5. 더하기
  sumPositiveNumber(numberInput) {
    const result = numberInput.reduce((a, b) => a + b);
    Console.print("result: " + result);
    return result;
  }

  async run() {
    // 1. 프로그램이 실행됐을 때 문자열 입력 받기
    const input = await Console.readLineAsync(
      '"//"과 "\\n" 사이에 문자열을 입력하고, 계산하려는 문자열을 입력해주세요.'
    );

    this.findDelimiter(input);
  }
}

export default App;
