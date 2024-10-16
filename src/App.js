import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const userInput = await Console.readLineAsync('문자열 덧셈을 해보아요:');
    this.print(userInput)

  }

  print(str) {
    Console.print('결과:' + str);
  }
}

export default App;
