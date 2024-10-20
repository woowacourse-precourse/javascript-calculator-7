import { Console } from "@woowacourse/mission-utils";
import Delimiters from "./Delimiters";
import Validator from "./Validator";
const CUSTOM_DISTINCT_REGEX = /^(\/\/.+\n)|\s+/g; // 커스텀 구분자의 식별자와 공백

class Calculator {
  constructor() {
    this.validator = new Validator();
  };

  async calculate () {
    let input = await this.getInput();
    input = input.trim().replace("\\n", "\n");
    if(this.isEmptyInput(input)) {
      Console.print("결과 : 0");
      return;
    }

    const delimitersInstance = new Delimiters();
    const delimiters = delimitersInstance.detect(input);
    const numbers = this.extractNumbers(delimiters, input);
    const result = this.addNumbers(numbers);
  
    Console.print(`결과 : ${result}`);
  }

  async getInput() {
    try {
      const input = await Console.readLineAsync('덧셈할 문자열을 입력해주세요.(기본 구분자: ",", ":" | 커스텀 구분자는 "//" "\n" 사이에 입력해주세요. 예: "//;\n")');
      return input;
    } catch (error) {
      throw new Error(`[ERROR] 입력값을 읽는 중 에러가 발생했습니다. ${error}`);
    }
  }

  isEmptyInput(input) {
    return input === "";
  }
  
  extractNumbers(delimiters, formula) {
    let cleanedFormula = formula.replace(CUSTOM_DISTINCT_REGEX, "");
  
    delimiters.forEach((delimiter) => {
      cleanedFormula = cleanedFormula.replaceAll(delimiter, ",");
    }) 

    const numbers = cleanedFormula.split(",").map((value) => {
      this.validator.validateNumberExist(value)
      return Number(value);
    });

    return numbers;
  }

  addNumbers(numbers) {
    this.validator.validateNumbers(numbers); 
    this.validator.validateNegativeNumbers(numbers);
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    return parseFloat(sum.toFixed(2));  
  }
}

export default Calculator;