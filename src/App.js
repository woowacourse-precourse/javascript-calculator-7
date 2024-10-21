import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
    let delimiters = [",", ":"];
    let expression = input.trim();

    if (input.startsWith("//") && input.includes("\n")) {
      const { customDelimiter, newExpression } = this.checkCustomDelimiter(input);
      delimiters.push(customDelimiter);
      expression = newExpression;
    }
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
        
      }
    }
  }

  throwError(message) {
    throw new Error(`[ERROR] ${message}`);
  }
}

export default App;