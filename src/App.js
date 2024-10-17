import { Console } from "@woowacourse/mission-utils"
class App {
    async run() {
      Console.print('덧셈할 문자열을 입력해주세요.');
      const DATA = await Console.readLineAsync("");

      let NUMBERS=[];
      const SEPARATOR = ",:";
      let RESULT = 0;

      // 조건 1: 기본 구분자
      if(DATA.match(SEPARATOR)){
        NUMBERS = DATA.split(SEPARATOR).map(Number);
      // 조건 2 : 커스텀 구분자
      } else if (DATA.startsWith("//") && DATA.substring(3, 5) === "\\n"){
        NUMBERS = DATA.substring(5).split(DATA[2]).map(Number);
      }
    }
}

export default App;