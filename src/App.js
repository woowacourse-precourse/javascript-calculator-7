import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
      const result = sumNumbers(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(error.message); 
      throw error; 
    }
  }
}

function sumNumbers(input) {
  if (input === "") {
    return 0;
  }
  input = input.replace(/\\n/g, "\n");

  if (input.startsWith("//")) {
    const customEndIndex = input.indexOf("\n");

    if (delimiterEndIndex === -1) {
      throw new Error("[ERROR] 유효하지 않은 구분자 형식입니다.");
    }
}

export default App;