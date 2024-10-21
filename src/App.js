import { Console } from "@woowacourse/mission-utils";

class App {
  defaultDelimeter = /[\s,:]/gi;
  defaultDelimeterValidation = /[^,\d:]/gi;

  isCustomDelimeterUsed(input) {
    return input.startsWith("//") && input.includes("\\n");
  }

  replaceDelimeter(input, delimeter) {
    let inputString = input;
    if (delimeter) {
      inputString = input.replaceAll(delimeter, " ");
    }

    return inputString.replaceAll(this.defaultDelimeter, " ");
  }

  addNumbers(inputString) {
    return inputString.split(" ").reduce((acc, cur) => acc + Number(cur), 0);
  }

  getAnswer(input) {
    let answer,
      inputString = input;

    if (this.isCustomDelimeterUsed(inputString)) {
      if (inputString.includes("\\n")) {
        inputString = inputString.replace(/\\\\/g, "\\");
      }
      const delimeter = inputString.split("\\n")[0].slice(2);
      const numbers = inputString.split("\\n")[1];

      inputString = this.replaceDelimeter(numbers, delimeter);
    }

    inputString = this.replaceDelimeter(inputString);
    answer = this.addNumbers(inputString);
    Console.print(`결과 : ${answer}`);
  }

  async run() {
    let endFlag = false;

    while (true) {
      endFlag = false;
      try {
        const userInput = await Console.readLineAsync(
          "덧셈할 문자열을 입력해 주세요.\n"
        );
        this.getAnswer(userInput);
      } catch (err) {
        throw new Error(`[ERROR]: ${err.message}`);
      }

      if (endFlag) {
        break;
      }
    }
  }
}

export default App;
