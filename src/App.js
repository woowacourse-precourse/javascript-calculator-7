import { Console } from "@woowacourse/mission-utils";

class App {
  getAnswer(input) {
    console.log(input);
  }

  async run() {
    while (true) {
      await Console.readLineAsync("숫자를 입력해주세요 : ")
        .then((userInput) => {
          return this.getAnswer(userInput);
        })
        .then((res) => Console.print(res));
    }
  }
}

export default App;
