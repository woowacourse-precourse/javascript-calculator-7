import { Console } from "@woowacourse/mission-utils";


class App {
  async run() {
    Console.print("덧셈할 문자열을 입력해주세요.")
    const userInput = await this.getUserInput();
    const result = this.sumNumbers(userInput);
    Console.print(`결과 : ${result}`);

  }

  async getUserInput() {
    return await Console.readLineAsync("");
  }  

  sumNumbers(input) {
  if (input === "") {
    return 0;
  }

  const numbers = input.split(/[,:]/).map(Number);
  return numbers.reduce((sum, num) => sum + num, 0);
}

}

export default App;


// 덧셈할 문자열을 입력해 주세요.
// 1,2:3
// 결과 : 6
