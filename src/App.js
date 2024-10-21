import { Console } from "@woowacourse/mission-utils";

class App {

  // 숫자 입력받는 함수
  startCalculator() {
    const userInput = Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    return userInput;
  }

  // 숫자 추출 함수
  workingCalculator(userInput) {
    let string = [];
    if (userInput.indexOf('//') == -1 === false) {
      // 커스텀 구분자 추출 하고나서 숫자만 추출
      const startIndex = userInput.indexOf('\\n');
      const custom = userInput.substring(2, startIndex);
      const splited = userInput.substring(startIndex + 2);
      const regex = new RegExp(`[${custom}:,]`);
      string = splited.split(regex).map(Number);
    } else {
      // 입력받은 값에서 숫자만 추출
      string = userInput.split(/,|:/).map(Number);
    }
    return string;
  }

  // 더하는 함수
  addNumber(num) {
    const sum = num.reduce((a, b) => (a + b));
    Console.print(`결과 :${sum}`);
  }

  // 예외처리 함수
  errorCalculator(inputSplited) {
    if (inputSplited.some((num) => num < 0)) {
      // 음수 입력했을 때
      Console.print('[ERROR]');
      throw new Error('ERROR');
    }

    if (inputSplited.some((val) => isNaN(val))) {
      Console.print('[ERROR]');
      throw new Error('ERROR');
    }
  }

  async run() { // 메인 실행 함수
    // 1. 문자열 입력 받기
    const userInput = await this.startCalculator();

    // 2. 구분자로 입력값 변환
    const inputSplited = this.workingCalculator(userInput);

    // 3. 변환한 값 더하고 출력
    this.addNumber(inputSplited);

    // 4. 예외처리
    this.errorCalculator(inputSplited)
  }
};

export default App;
