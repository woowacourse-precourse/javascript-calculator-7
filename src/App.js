//모듈 사용
import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    //입력받기
    let input = await Console.readLineAsync("사용자 입력을 해주세요 : ");

    let delimiter;
    //구분자 설정
    if (input.indexOf("\\n") - input.indexOf("//") == 3) {
      // '//'와 '\n'이 존재한다면
      delimiter = [input.substr(2, 1)];
      input = input.substr(5);
    } else {
      delimiter = /[:,]/; // 정규식 : 콜론(:)과 쉽표(,)중 하나와 일치하는 패턴
    }
    let splitInputNumber = input.split(delimiter); // 문자열을 구분자 기준으로 구분하여 저장
    Console.print(splitInputNumber);
  }
}
export default App;
