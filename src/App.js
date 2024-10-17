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

    let sum = 0;
    splitInputNumber.forEach((num) => {
      sum += Number(num); // 구분된 문자형 숫자를 숫자 타입으로 변환하여 덧셈
    });
    Console.print("결과 : " + sum);
  }
}
export default App;
