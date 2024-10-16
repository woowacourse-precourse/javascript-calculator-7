import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const basicDelimiter = ",:";
    let input = await this.getInput();

    if (input.length === 0) {
      this.printResult(0);
    }

    this.printResult(input);
  }

  findCustomDelimiter(input) {
    if (input.includes("//") || input.includes("\n")) {
      if (!input.includes("//") || !input.includes("\n")) {
        throw new Error("[ERROR] 커스텀 구분자 설정이 잘못되었습니다.");
      }
    }

    return input.match(/(?<=\/\/)(.+?)(?=\\n)/g) ?? "";
  }

  getInput() {
    return Console.readLineAsync();
  }
  printResult(output) {
    Console.print(`결과 : ${output}`);
  }
}

export default App;
