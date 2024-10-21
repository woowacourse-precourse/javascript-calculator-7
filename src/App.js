import { Console } from "@woowacourse/mission-utils";

class App {
  startCalculator() { // 숫자 입력받는 함수
    const userInput = Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    return userInput;
  }

  workingCalculator(userInput) { // 계산기 작동
    let string = [];
    // 커스텀 구분자 추출 하고나서 숫자만 추출하기
    if (userInput.indexOf('//') != -1 === false) {
      const startIndex = userInput.indexOf('//') + 2;
      const endIndex = userInput.indexOf("\n");
      const custom = userInput.substring(startIndex, endIndex);
      const delFirst = userInput.replace('//', '');
      const delSecond = delFirst.replace(/\n/g, "");
      string = delSecond.split(custom).map(Number);
    } else {
      // 입력받은 값에서 숫자만 추출하는 함수
      const changeColon = userInput.replace(":", ",");
      const comma = changeColon.split(',').map(Number);
      string = comma;
    }
    return string;
  }

  addNumber(num) { // 더하는 함수
    const sum = num.reduce((a, b) => (a + b));
    Console.print(`결과 :${sum}`)
  }

  errorCalculator(inputSplited) { // 오류창 띄우는 함수
    if (/\d/.test(inputSplited) === false) { // 숫자 포함 되지 않을 때 에러
      Console.print('[ERROR]');
      throw new Error('ERROR');
    } if (userInput.indexOf('//') != -1 === true) { // '//'으로 시작하지 않을 때 에러
      Console.print('[ERROR]');
      throw new Error('ERROR');
    } if (isNaN(inputSplited) || inputSplited < 0) { // 음수 입력했을 때
      Console.print('[ERROR]');
      throw new Error('ERROR');
    }
  }

  async run() {
    try {
      const userInput = await this.startCalculator();

      const inputSplited = this.workingCalculator(userInput);

      this.addNumber(inputSplited);
    } catch (error) {
      this.errorCalculator(inputSplited);
      throw error;
    }
  }
};


export default App;
