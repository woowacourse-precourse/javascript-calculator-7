import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요. \n');
      const result = this.calculateSum(input);
      Console.print(`결과: ${result}`);
    } catch (error) {
      Console.print(error.message);
    }
  }

  calculateSum(input) {

    let defaultDelimiter = /[,:]/;
    let numberString = input;

    // `split`를 사용하여 문자열을 구분
    const numbers = numberString.split(defaultDelimiter);
    
    return numbers
  }
}

export default App;