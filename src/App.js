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
    if (this.validateFormula(formula, delimiters)) {
      //피연산자 추출
      const operands = this.extractOperands(formula, delimiters);
      const sum = this.calculateSum(operands);
      Console.print(`결과 : ${sum}`);
    }
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
    const delimiterRegex = new RegExp(`[${delimiters.join('')}]`);
    //-를 구분자로 지정하지 않았을 때 음수 처리
    if (delimiters.join('').indexOf('-') === -1 && /-(\d+)/.test(formula)) {
      throw new Error("[ERROR] 음수는 허용되지 않습니다.");
    }

    // 연속된 구분자 방지
    if (/([,;:!@#$%^&*()_\-+=\[\]{};:'",.<>?/\\|~`]){2,}/.test(formula)) {
      throw new Error("[ERROR] 구분자가 연속으로 사용되었습니다.");
    }

    //구분자와 숫자 이외의 문자가 들어갔는지 검사
    for (const char of formula) {
      if (!char.match(/\d/) && !delimiterRegex.test(char)) {
        throw new Error("[ERROR] 유효하지 않은 문자가 들어갔습니다.");
      }
    }

    return true;
  }

  extractOperands(formula, delimiters) {
    //구분자를 기준으로 split
    const delimitersRegex = new RegExp(`[${delimiters.join('')}]`);
    const operands = formula.split(delimitersRegex);
    return operands;
  }

  calculateSum(operands) {
    let sum = 0;
    for (let index = 0; index < operands.length; index++) {
      sum = sum + Number(operands[index]);
    }

    return (sum);
  }
};

export default App;
