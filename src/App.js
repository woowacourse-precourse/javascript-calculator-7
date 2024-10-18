import { Console } from "@woowacourse/mission-utils";

class App {
  //parse user input using both custom delimiters and default delimiters
  parseInput(userInput) {
    let delimetersPattern = "[,:]";
    let input = userInput;
    let customDelimetersArray = [];

    while (input.startsWith("//")) {
      const customDelimeter = input.slice(2, input.indexOf("\\n"));
      customDelimetersArray.push(customDelimeter);
      input = input.slice(input.indexOf("\\n") + 2);
    }

    if (customDelimetersArray.length) {
      delimetersPattern = `[,:${customDelimetersArray.join("")}]`;
    }

    const delimetersRegExp = new RegExp(delimetersPattern);
    const parsedInput = input.split(delimetersRegExp);

    return parsedInput;
  }
  async run() {
    //get user input
    const userInput = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    Console.print(`raw input : ${userInput}`);
    //parse user input
    if (userInput) {
      const parsedInput = this.parseInput(userInput);
      Console.print(parsedInput);
    } else {
      Console.print(0);
    }
  }
}

export default App;
