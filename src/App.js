import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const inputValue = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    const TempValueArray = inputValue.split(",");

    const splitedValueArray = TempValueArray.map((value) => {
      if (value.includes(":")) {
        return value.split(":");
      }

      return value;
    }).flat();

    const sum = splitedValueArray.reduce((acc, curr) => acc + +curr, 0);

    Console.print(`결과 : ${sum}`);
  }
}

export default App;
