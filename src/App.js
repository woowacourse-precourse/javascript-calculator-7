// 현재 프로젝트는 ES모듈로 설정되어 있는데, require는 CommonJS에서 사용된다.
// 프리코스 규칙에 따라 package.json 파일을 수정할 수 없으므로, require를 import로 변경한다.
import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const input = await this.getInput();
    const result = this.add(input);
    this.printResult(result);
  }

  async getInput() {
    // 수정사항 적용된 부분
    return Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
  }

  add(input) {
    if (input === "") return 0; // 빈 문자열 처리

    let delimiter = /[,|:]/; // 기본 구분자는 우선 쉼표 또는 콜론으로 정의

    // 커스텀 구분자 처리
    if (input.startsWith("//")) {
      const parts = input.split("\\n"); // '\n' 문자열 그대로 처리하는 방법

      if (parts.length < 2 || parts[1].trim() === "") {
        // 디버깅
        // console.log(parts[0]);
        // console.log(parts[1]);
        throw new Error("[ERROR] 잘못된 입력 형식입니다.");
      }

      const customDelimiter = parts[0].slice(2); // '//' 뒤의 커스텀 구분자 추출
      delimiter = new RegExp(`[${customDelimiter}]`); // 기본구분자 또는 커스텀구분자로 사용
      input = parts[1]; // 숫자 부분만 남김
    }

    const numbers = input
      .split(delimiter)
      .filter((num) => num !== "") // 빈 값 필터링
      .map((num) => {
        const parsedNum = Number(num);
        if (isNaN(parsedNum)) {
          throw new Error("[ERROR] 숫자가 아닌 값이 포함되었습니다."); // 숫자 유효성 검사
        }
        return parsedNum;
      });

    return numbers.reduce((sum, num) => sum + num, 0);
  }


  printResult(result) {
    Console.print(`결과 : ${result}`);
  }
}

export default App;
