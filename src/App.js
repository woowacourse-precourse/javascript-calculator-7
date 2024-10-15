import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync('닉네임을 입력해주세요.')
    Console.print(username)
  }
}

export default App;
