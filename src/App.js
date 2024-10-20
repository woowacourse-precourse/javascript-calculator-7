import { Console } from "@woowacourse/mission-utils";

class App {
  #startCalculator() { // 숫자 입력받는 함수
    Console.readLineAsync('덧셈할 문자열을 입력해 주세요.', (userInput) => {
      console.log(`입력: ${userInput}`);
    });
  }


  #workingCalculator(userInput) { // 계산기 작동
    if (userInput.startsWith(/[0-9]/)) {
      this.#NumberPicker(userInput);
    } else if (userInput.indexOf('//') != -1 === false) {
      this.#customPicker(userInput);
    } else {
      this.#errorCalculator(userInput);
    }
  }

  #NumberPicker(userInput) { // 입력받은 값에서 숫자만 추출하는 함수
    const CHANGE_COLON = userInput.replace(":", ",");
    const COMMA = CHANGE_COLON.split(',');
    const PICKED_NUMBER = COMMA;
    const RESULT = this.#addNumber(PICKED_NUMBER);
    return RESULT;
  }

  #customPicker(userInput) { // 커스텀 구분자 추출 하고나서 숫자만 추출하기
    const START_INDEX = userInput.indexOf('//') + 2;
    const END_INDEX = userInput.indexOf("\n");
    const CUSTOM = userInput.substring(START_INDEX, END_INDEX);
    const DEL_FIRST = userInput.replace('//', '');
    const DEL_SECOND = DEL_FIRST.replace(/\n/g, "");
    const PICK_CUSTOM_NUMBER = DEL_SECOND.split(CUSTOM);
    const RESULT = this.#addNumber(PICK_CUSTOM_NUMBER);
    return RESULT;
  }

  #addNumber(x) { // 더하는 함수
    const TURN_NUMBER = x.map(Number);
    const SUM = TURN_NUMBER.reduce((a, b) => (a + b));
    return SUM;
  }

  #errorCalculator(userInput) { // 오류창 띄우는 함수
    if (/\d/.test(userInput) === false) { // 숫자 포함 되지 않을 때 에러
      throw new Error('ERROR');
    } else if (userInput.indexOf('//') != -1 === true) { // '//'으로 시작하지 않을 때 에러
      throw new Error('ERROR');
    }
  }

  #resultCalculator() { // 결과값 띄우는 함수
    this.#workingCalculator();
    Console.print(RESULT);
  }


  async run() {
    await this.#startCalculator();
    await this.#resultCalculator();
  }
};


export default App;
