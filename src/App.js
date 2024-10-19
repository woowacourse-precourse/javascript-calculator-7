import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync("문자열을 입력해주세요: ");
    const regexp = /\/\/.\\n/;
    const seperators = [",", ":"];
    let inputString = input;

    while (true) {
      const regexpArray = regexp.exec(inputString);
      if (regexpArray === null) {
        break;
      }
      if (regexpArray.index !== 0) {
        break;
      }
      seperators.push(regexpArray[0][2]);
      inputString = inputString.replace(regexp, "");
    }
  }
}

export default App;
