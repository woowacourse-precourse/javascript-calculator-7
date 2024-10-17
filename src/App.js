//모듈 사용
import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    //입력받기
    let input = await Console.readLineAsync("사용자 입력을 해주세요 : ");
  }
}
export default App;
