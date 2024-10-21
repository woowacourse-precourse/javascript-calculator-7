import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
    let delimiters = [",", ":"];
    let expression = input.trim();

    if (expression.startsWith("//") && expression.includes("\n")) {
      const { customDelimiter, newExpression } = this.checkCustomDelimiter(expression);
      delimiters.push(customDelimiter);
      expression = newExpression;
    }

    const result = this.calculateSum(expression, delimiters);
    Console.print(`결과 : ${result}`);
  }

  checkCustomDelimiter(str) {
    const endOfCustomDelimiter = str.indexOf("\n");
    const expression = str.substring(endOfCustomDelimiter + 1);
    return { customDelimiter, expression };
  }

  calculateSum(expression, delimiters) {
    const regExpOfDelimiter = new RegExp(delimiters.join('|'));
    const numbers = expression.split(regExpOfDelimiter);
    let sum = 0;
    
    for (const number of numbers) {
      if (isNaN(number)) {
        this.throwError(`올바르지 않은 입력값이 있습니다. (${number})`);
      } else if (Number(number) <= 0) {
        this.throwError(`덧셈값은 양수만 입력할 수 있습니다. (${number})`);
      } else {
        sum += Number(number);
      }
    }

    return sum;
  }

  throwError(message) {
    throw new Error(`[ERROR] ${message}`);
  }
}

export default App;