import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    let input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    let answer = 999999;

    if (input === "") {
      answer = 0;
    } else {
      function extractCustomDelimiter(input) {
        const delimiterMatch = input.match(/\/\/(.+?)\\n/);
        if (delimiterMatch) {
          return delimiterMatch[1];
        }
        return null;
      }

      let customDelimiter = extractCustomDelimiter(input);
      let delimiters = [',', ':'];
      
      if (customDelimiter) {
        input = input.split("\\n")[1];
        delimiters.push(customDelimiter);
      }

      const REGEX = new RegExp(`[${delimiters.join('')}]`);
      const numbers = input.split(REGEX).map(Number);

      const negativeNumbers = numbers.filter(num => num < 0);
      if (negativeNumbers.length > 0) {
        throw new Error(`[ERROR] 음수는 허용되지 않습니다: ${negativeNumbers.join(', ')}`);
      }

      answer = numbers.reduce((acc, cur) => acc + cur, 0);
    }

    Console.print(`결과 : ${answer}`);
  }
}

export default App;