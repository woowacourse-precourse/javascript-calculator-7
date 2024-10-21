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
    console.log(strArr);
  }
}

export default App;
