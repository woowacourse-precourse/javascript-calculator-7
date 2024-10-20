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
    // 빈 문자열 입력 시 0 반환하는 기능
    if (input === "") {
      return 0;
    }

    // 쉼표(,) 또는 콜론(:)으로 숫자를 구분하여 연산하는 기능
    const numbers = input.split(/[,|:]/).map(Number);
    return numbers.reduce((sum, num) => sum + num, 0);
  }

  printResult(result) {
    Console.print(`결과 : ${result}`);
  }
}

export default App;
