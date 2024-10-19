// Console API 
import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n'); // 1.프롬프트 입력 기능
      Console.print(`결과 : ${input}`); 
    } catch(err) {
      throw new Error('[ERROR]')
    }
  }
}

export default App;
