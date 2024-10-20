import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    try {
      let input = await Console.readLineAsync(
        "덧셈함 문자열을 입력해 주세요.\n"
      );
      let result = App.calculate(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print("[ERROR] " + error.message);
    }
  }

  static calculate(input) {
    if (input === "") return 0;

    let delimiters = [',', ':'];
    let numbersString = input;
    console.log(numbersString)
    if (input.startsWith("//")) {
      const delimiterEndIndex = input.indexOf("\\n");
      if (delimiterEndIndex === -1) {
        throw new Error("잘못된 입력입니다. 커스텀 구분자가 잘못되었습니다.");
      }

      const customDelimiter = input.slice(2, delimiterEndIndex);
      delimiters.push(customDelimiter);
      numbersString = input.slice(delimiterEndIndex + 1);
      Console.print(delimiters)
    }

    return 0;
  }
}

export default App;
