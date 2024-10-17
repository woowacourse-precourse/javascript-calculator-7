//모듈 사용
import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    //입력받기
    let input = await Console.readLineAsync("사용자 입력을 해주세요 : ");

    let div;
    //구분자 설정
    if (input.indexOf("\\n") - input.indexOf("//") == 3) {
      // '//'와 '\n'이 존재한다면
      div = [input.substr(2, 1)];
    } else {
      div = [",", ":"];
    }
    Console.print(div);
  }
}
export default App;
