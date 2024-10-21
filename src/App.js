import { Console } from "@woowacourse/mission-utils";

class App {
  vaildateInput(input) {
    if (!input) {
      Console.print("0");
    }
    this.findDelimiter(input);
  }

  // 2. 구분자 찾기
  findDelimiter(input) {
    const hasCustomDelimeter =
      input.trim().startsWith("//") && input.includes("\\n");

    const isCustomDelimiter = () => {
      hasCustomDelimeter
        ? this.validateCustomDelimiter(input)
        : this.splitByDefaultDelimiter(input);
    };

    isCustomDelimiter();
  }

  // 2-1 구분자 검증
  validateCustomDelimiter(input) {
    const startDelimiter = Number(input.indexOf("//"));
    const endDelimiter = Number(input.indexOf("\\n"));
    const customDelimiter = input.slice(startDelimiter + 2, endDelimiter);
    const withoutCustomDelimiter = input.slice(endDelimiter + 2);

    // 커스텀 구분자가 공백이거나 숫자인 경우
    if (!customDelimiter) throw "커스텀 구분자는 공백이 될 수 없습니다.";

    if (typeof customDelimiter === Number)
      throw "커스텀 구분자는 숫자가 될 수 없습니다.";

    // 커스텀 구분자를 제외한 문자열이 공백인 경우
    if (!withoutCustomDelimiter) {
      throw "계산할 식이 있어야합니다.";
    }

    this.splitByCustomDelimiter(withoutCustomDelimiter, customDelimiter);
  }

  // 3. 구분자로 문자 분리하기 - 커스텀 구분자
  splitByCustomDelimiter(withoutCustomDelimiter, customDelimiter) {
    const onlyInput = withoutCustomDelimiter
      .split(customDelimiter)
      .filter((el) => el !== "");

    if (onlyInput === "") throw "계산할 값이 적어도 하나는 존재해야 합니다.";

    this.validateStringInput(onlyInput);
  }

  splitByDefaultDelimiter(input) {
    // 기본 구분자
    const withoutCommaInput = input.replace(",", ":");
    const onlyInput = withoutCommaInput.split(":");
    if (onlyInput === "") throw "계산할 값이 적어도 하나는 존재해야 합니다.";

    this.validateStringInput(onlyInput);
  }

  // 4. 분리한 문자 검증
  validateStringInput(onlyInput) {
    // 변수.map((el) => typeof Number(변수) === number);
    const numberInput = onlyInput.map((e) => Number(e));

    for (let i = 0; i < numberInput.length; i++) {
      if (isNaN(numberInput[i])) throw "계산은 숫자만 가능합니다.";
      else if (numberInput[i] <= 0) throw "계산은 양수만 가능합니다.";
    }

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
    try {
      this.vaildateInput(input);
    } catch (error) {
      Console.print("[ERROR] " + error);
    }
  }
}

export default App;
