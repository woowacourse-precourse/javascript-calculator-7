import { Console } from "@woowacourse/mission-utils";

class App {
  #startCalculator() { // 숫자 입력받는 함수
    Console.readLineAsync('덧셈할 문자열을 입력해 주세요.', (userInput) => {
      console.log(`입력: ${userInput}`);
    });
  }

  #NumberPicker(userInput) { // 입력받은 값에서 숫자만 추출하는 함수
    const CHANGE_COLON = userInput.replace(":", ",");
    const COMMA = CHANGE_COLON.split(',');
    const PICKED_NUMBER = COMMA;
    const RESULT = this.#addNumber(PICKED_NUMBER);
    return RESULT;
  }

  async run() {
    await this.#startCalculator();
  }
};


export default App;
