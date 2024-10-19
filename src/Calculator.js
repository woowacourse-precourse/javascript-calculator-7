import { Console } from "@woowacourse/mission-utils";
const CUSTOM_DISTINCT_REGEX = /^(\/\/.+\n)|\s+/g;

class Caculator {
  async calculate () {
    const input = await this.getInput();
    Console.print("결과 : 1");
  }

  getInput() {
    try {
      const input = Console.readLineAsync('닉네임을 입력해주세요.');
      return input;
    } catch (error) {
      
    }
  }

  extractNumbers(delimiters, formula) {
    let parsedFormula = formula.replace(CUSTOM_DISTINCT_REGEX, "");
    for (let delimiter of delimiters ) {
      parsedFormula = parsedFormula.replaceAll(delimiter, " ");
    }
    const numbers = parsedFormula.split(" ").map(Number);
    return numbers;
  }

  addNumbers(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
}

export default Caculator;