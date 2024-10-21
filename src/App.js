import { Console } from "@woowacourse/mission-utils";

class App {
  defaultDelimeter = /[\s,:]/gi;
  defaultDelimeterValidation = /[^,\d:]/gi;

  isCustomDelimeterUsed(input) {
    return input.startsWith("//") && input.includes("\n");
  }

  replaceDelimeter(input, delimeter) {
    if (delimeter) {
      return input.replaceAll(delimeter, ",");
    }
    return input.replaceAll(this.defaultDelimeter, ",");
  }

  addNumbers(inputString) {
    return inputString.split(",").reduce((acc, cur) => acc + Number(cur), 0);
  }

  getAnswer(input) {
    if (!input) {
      throw new Error("입력값이 없습니다.");
    }

    let inputString = input;
    inputString = inputString.replace("\\\\n", "\n").replace("\\n", "\n");

    if (this.isCustomDelimeterUsed(inputString)) {
      const [delimeterPart, numbers] = inputString.split("\n");
      const delimeter = delimeterPart.slice(2);

      inputString = this.replaceDelimeter(numbers, delimeter); // 구분자를 ,로 변경
    }

    if (inputString.match(this.defaultDelimeterValidation)) {
      throw new Error("유효하지 않은 입력입니다.");
    }

    inputString = this.replaceDelimeter(inputString); // 기본 구분자 처리
    const answer = this.addNumbers(inputString);
    Console.print(`결과 : ${answer}`);
  }

  async run() {
    let endFlag = false;

    while (true) {
      try {
        const userInput = await Console.readLineAsync(
          "덧셈할 문자열을 입력해 주세요.\n"
        );
        this.getAnswer(userInput);
      } catch (err) {
        endFlag = true;
        Console.print(`[ERROR] ${err.message}`);
      }

      if (endFlag) {
        break;
      }
    }
  }
}

export default App;
