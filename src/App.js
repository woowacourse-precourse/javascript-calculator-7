import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const INPUT_MESSAGE = Console.readLineAsync();
    let delimiter = /[,:]/;

    Console.print(
      INPUT_MESSAGE.split(delimiter)
        .map(Number)
        .reduce((a, c) => a + c, 0)
    );
  }
}

export default App;
