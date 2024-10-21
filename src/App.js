import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.cursor = 0;
    this.separator = [',', ':'];
    this.number = [];
    this.sum = 0;
  }

  async run() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    const strArr = input.trim().split('');
    
    while (this.cursor < strArr.length) {
      const char = strArr[this.cursor];

      if (char === '/') { // "/"로 시작하는 경우
        this.handleCustomSeparator();
      } else if (isNaN(Number(char))) { // 숫자가 아닌 경우
        this.handleNotNumber();
      } else { // 숫자인 경우
        this.handleNumber();
      }
    }
  }

  handleCustomSeparator() {}

  handleNotNumber() {}

  handleNumber() {}
}

export default App;
