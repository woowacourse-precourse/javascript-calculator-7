import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    let numbers = [];

    const userInput = await Console.readLineAsync(
      "덧셈할 문자열을 입력하여 주세요.\n"
    );

    if (userInput.startsWith("//") && userInput.indexOf("\\n") !== -1) {
      numbers = userInput.substr(5).split(userInput[2]);
    } else {
      numbers = userInput.split(/,|:/);
    }
    Console.print(numbers);

    if (numbers.includes("")) {
      throw new Error("[ERROR]빈 값이 입력되었습니다.");
    }
  }
}

export default App;
