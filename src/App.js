import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    let input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

    let answer = 999999;

    if (input === "") {
      answer = 0;
    }else{
      function extractCustomDelimiter(input) {
        const DELIMITER_MATCH = input.match(/\/\/(.+?)\\n/);
        if (DELIMITER_MATCH) {
          return DELIMITER_MATCH[1];
        }
        return null;
      }

      let customDelimiter = extractCustomDelimiter(input);
      let delimiters = [',', ':'];
      
      if (customDelimiter) {
        input = input.split("\\n")[1];
        delimiters.push(customDelimiter);
      }

      const SUPPORTED_DELIMITERS_REGEX = new RegExp(`^[0-9${delimiters.join('')}]+$`);
      if (!SUPPORTED_DELIMITERS_REGEX.test(input)) {
        throw new Error("[ERROR] 올바르지 않은 입력입니다. 올바른 구분자를 사용하세요.");
      }

      const REGEX = new RegExp(`[${delimiters.join('')}]`);
      const NUMBERS = input.split(REGEX).map(Number);

      answer = NUMBERS.reduce((acc, cur) => acc + cur, 0);
    }

    Console.print(`결과 : ${answer}`);
  }
}

export default App;
