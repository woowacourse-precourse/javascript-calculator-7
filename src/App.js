import { Console } from "@woowacourse/mission-utils";

class App {
  #startCalculator() { // 숫자 입력받는 함수
    Console.readLineAsync('덧셈할 문자열을 입력해 주세요.', (userInput) => {
      console.log(`입력: ${userInput}`);
    });
  }

  async run() {
    await this.#startCalculator();
  }
};


export default App;
