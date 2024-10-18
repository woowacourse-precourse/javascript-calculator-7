import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const delimiters = [',', ':'];
    //사용자의 입력값 받기
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
    let formula = input;
    //사용자의 입력값이 커스텀 구분자를 정의하며 시작하는지 검사
    if (input.startsWith("//")) {
      //커스텀 구분자를 정의하며 시작했다면 커스텀 구분자 추출
      formula = this.extractionCustomDelimiter(input, delimiters);
    }
    //수식 유효성 검사
    this.validateFormula(formula, delimiters)
  }

  extractionCustomDelimiter(input, delimiters) {
    const specialCharRegex = /^[!@#$%^&*()_\-+=\[\]{};:'",.<>?/\\|~`]+$/;
    let formula = input;
    //커스텀 구분자 정의를 시작했지만 \n을 사용하여 닫지 않은 경우
    if (input.indexOf('\\n') === -1) {
      throw new Error('[ERROR] 커스텀 구분자 정의를 마무리짓지 않았습니다.');
    }
    if (input.indexOf('\\n') > 0) {
      //다수의 커스텀 구분자를 index로 추출
      for (let indexEndDef; (indexEndDef = formula.indexOf('\\n')) !== -1;) {
        const customDelimiter = formula[indexEndDef - 1];
        //커스텀 구분자 정의 예외 처리(오직 1 개의 특수 문자만 허가)
        if (indexEndDef !== 3 || !specialCharRegex.test(customDelimiter)) {
          throw new Error('[ERROR] 커스텀 구분자 정의는 1 개의 특수 문자만 가능합니다.')
        }
        delimiters.push(customDelimiter);
        formula = formula.slice(indexEndDef + 2);
      }
    }
    return formula;
  };

  validateFormula(formula, delimiters) {
    if (delimiters.join('').indexOf('-') === -1 && /-(\d+)/.test(formula)) {
      throw new Error("[ERROR] 음수는 허용되지 않습니다.");
    }

    // 숫자 유효성 검사 (숫자와 구분자만 존재하는지 확인)
    const validFormulaRegex = new RegExp(`^([0-9]+|[${delimiters.join('')}])+$`);
    if (!validFormulaRegex.test(formula)) {
      throw new Error("[ERROR] 유효하지 않은 형식입니다.");
    }

    // 연속된 구분자 방지
    if (/([,;:!@#$%^&*()_\-+=\[\]{};:'",.<>?/\\|~`]){2,}/.test(formula)) {
      throw new Error("[ERROR] 구분자가 연속으로 사용되었습니다.");
    }
  }
};

export default App;
