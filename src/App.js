import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    let input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

    let answer = 999999;

    if (input === "") {
      answer = 0;
    }else{
      let delimiters = [',', ':'];

      const REGEX = new RegExp(`[${delimiters.join('')}]`);
      const NUMBERS = input.split(REGEX).map(Number);

      answer = NUMBERS.reduce((acc, cur) => acc + cur, 0);
    }

    Console.print(`결과 : ${answer}`);
  }
}

export default App;
