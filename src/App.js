import { Console } from "@woowacourse/mission-utils";
Console.print(1);


class App {
  #startCalculator() {
    Console.readLineAsync('덧셈할 문자열을 입력해 주세요.', (num) => {
      console.log(`숫자: ${num}`);
    });
  }


  async run() {
    await this.#startCalculator();
  }
};

export default App;
