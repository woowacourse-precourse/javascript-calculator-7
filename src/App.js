import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const INPUT = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요\n");
    // 빈 문자열은 0을 반환한다.
    if (INPUT === "") {
      Console.print(`결과 : 0`);
      return;
    }
    //구분자를 사용해 숫자를 분리한다
    let DELIMITER = /,|:/;
    let NUMBERSINPUT = INPUT
    // 커스텀 구분자를 사용한다.
    // '//' 뒤에 '\\n'가 없는 경우
    if (INPUT.startsWith('//')) {
      const NEWLINE_INDEX = INPUT.indexOf('\\n');
      if (NEWLINE_INDEX === -1) {
        throw new Error("[ERROR]")
      } else {
        const CUSTOM = INPUT.substring(2,INPUT.indexOf('\\n'));
        DELIMITER = new RegExp(`[${CUSTOM},:]`)
        NUMBERSINPUT = INPUT.substring(INPUT.indexOf('\\n') + 2 );
      }

    }
    const NUMBERS = NUMBERSINPUT.split(DELIMITER).map(Number);
    // 분리한 숫자의 합을 반환한다
    const RESULT = NUMBERS.reduce((sum, num) => sum + num, 0);
  
    //예외 처리
    //음수를 입력하는 경우
    //'//'와 '\\n'사이가 공백일 경우
    const NEGATIVES = NUMBERS.filter(num => num < 0);

    if (NEGATIVES.length > 0 || INPUT.indexOf('\\n') === 2) {
      throw new Error ("[ERROR]")
    } else {
      Console.print(`결과 : ${RESULT}`);
    }
  }
}

export default App;
