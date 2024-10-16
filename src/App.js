import { readFileSync } from 'fs';
import readline from 'readline';
import { Console } from "@woowacourse/mission-utils";

// 1. 입출력 기능 -  입력 : '덧셈할 문자열을 입력해 주세요.\n', 한 줄로 입력받기
async function getString() {
  try {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    return input;
  } catch (err) {
    Console.print(err)
  }
}

class App {
  async run() {
    try {
      // 1. 입출력 기능 -  입력
      const input = await getString();

      // 결과 출력
      Console.print(`결과 : ${input}`); // 후에 출력값으로 바뀔 예정
      return;
    } catch(err) {
      Console.print(err); // 임시 로직
    }
  }
  
}

export default App;