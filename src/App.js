import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const stringInput = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요."
    );

    if (stringInput.trim() === "") {
      Console.print("결과 : 0");
      return;
    }

    const defaultRegExp = /[,|:]/;
    const customRegExp = /^\/\/(.*?)\\n/;
    const customMatch = stringInput.match(customRegExp);
    let numbers;

    if (customMatch === null) {
      numbers = stringInput.split(defaultRegExp);
    } else {
      numbers = stringInput.slice(customMatch[0].length).split(customMatch[1]);
    }

    const sumNumbers = numbers.map(Number).reduce((acc, cur) => acc + cur, 0);

    Console.print("결과 : " + sumNumbers);
  }
}

export default App;
