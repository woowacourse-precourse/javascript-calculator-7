import { Console } from "@woowacourse/mission-utils";

class App {
  separator = new Set([":", ","]);

  isValidateNumber = (number) => {
    return !isNaN(number) && number >= 0;
  };

  findCustomSeparator = (input) => {
    // 커스텀 구분자가 있는지 확인한다.
    // "//"와 "\n" 사이에 위치하는 문자를 커스텀 구분자로 사용한다
    let userInput = input.slice(); // 불변성 유지
    const regex = /\/\/(.*?)\\n/;
    while (userInput.match(regex)) {
      const customSeparator = userInput.match(regex);

      if (customSeparator) {
        this.separator.add(customSeparator[1]);
      }
      userInput = userInput.replace(regex, "");
    }

    return userInput;
  };

  checkNumberValidity = (numbers) => {
    if (numbers.length === 0) {
      throw new Error("[ERROR]");
    }

    // 숫자가 아닌 값이 포함되어 있는지 확인한다.
    // 음수가 포함되어 있다면 예외를 발생시킨다.
    if (numbers.some((number) => !this.isValidateNumber(number))) {
      throw new Error("[ERROR]");
    }

    return true;
  };

  solve = (input) => {
    try {
      if (input.length === 0) {
        Console.print("결과 :", 0);
      } else {
        const separatedInput = this.findCustomSeparator(input);

        // 구분자를 기준으로 문자열을 나눈다.
        const separators = new RegExp(`[${[...this.separator].join("")}]`);
        const numbers = separatedInput.split(separators);

        // 문자열을 숫자로 변환한다.
        const parsedNumbers = numbers.map((number) => parseInt(number));

        // 숫자가 유효한지 확인한다.
        if (this.checkNumberValidity(parsedNumbers)) {
          // 숫자를 모두 더한다.
          const sum = parsedNumbers.reduce((acc, cur) => acc + cur, 0);
          Console.print(`결과 : ${sum}`);
        }
      }
    } catch (error) {
      Console.print(error.message);
    }
  };

  async run() {
    // 사용자로부터 덧셈할 문자열을 입력받는다.
    // this.solve("4;2;//;\n1;//-\n2;3");
    Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n").then((input) => {
      this.solve(input);
    });
  }
}

export default App;
