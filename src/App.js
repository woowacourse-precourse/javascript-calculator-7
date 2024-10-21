import { Console } from "@woowacourse/mission-utils";

class App {
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

  getAnswer(input) {
    let answer, inputString;

    if (this.isCustomDelimeterUsed(input)) {
      const delimeter = input.split("\\n")[0].slice(2);
      const numbers = input.split("\\n")[1];

      inputString = this.replaceDelimeter(numbers, delimeter);
    }

    inputString = this.replaceDelimeter(input);
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
