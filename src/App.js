import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해주세요.");
    Console.print(`입력값 : ${input}`);
  }
}

export default App;
