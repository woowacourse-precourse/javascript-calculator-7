import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    var inputNumbers;

    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요\n");

    const customSeparator = input.match(/\/\/(.)\\n/);

    if (customSeparator != null) {
      inputNumbers = input.split(customSeparator[1]);
      inputNumbers.splice(0, 2);
    } else {
      inputNumbers = input.split(/[,|:]/);
    }

    Console.print("결과 : " + inputNumbers);
  }
}

export default App;
