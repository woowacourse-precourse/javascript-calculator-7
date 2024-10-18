import { Console } from "@woowacourse/mission-utils";
import extractionCustomDelimiter from "./extractionCustomDelimiter";
import validateFormula from "./validateFormula";
import extractOperands from "./extractOperands";
import calculateSum from "./calculateSum";

class App {
  async run() {
    const delimiters = [',', ':'];
    const firstCharRegex = /^[\d\/]/
    //사용자의 입력값 받기
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
    //사용자의 입력값이 "/" 혹은 숫자로 시작하는지 검사
    if (!firstCharRegex.test(input)) {
      throw new Error('[ERROR] 첫 문자는 숫자 혹은 커스텀 정의 구문이어야 합니다.');
    }
    let formula = input;
    //사용자의 입력값이 커스텀 구분자를 정의하며 시작하는지 검사
    if (input.startsWith("//")) {
      //커스텀 구분자를 정의하며 시작했다면 커스텀 구분자 추출
      formula = extractionCustomDelimiter(input, delimiters);
    }
    //수식 유효성 검사
    if (validateFormula(formula, delimiters)) {
      //피연산자 추출
      const operands = extractOperands(formula, delimiters);
      const sum = calculateSum(operands);
      Console.print(`결과 : ${sum}`);
    }
  }
};

export default App;