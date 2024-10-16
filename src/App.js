import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const basicDelimiter = [",", ":"];
    let input = await this.getInput();

    if (input.length === 0) {
      this.printResult(0);
    }

    const [customDelimiter, remain] = this.extractDelimiter(input);

    this.printResult(answer);
  }

  extractDelimiter(input) {
    if (this.isCustomDelimiter(input) === false) {
      return ["", input];
    }
    const splited = input.split("\\n");
    return [splited[0].slice(2), splited[1]];
  }

  isCustomDelimiter(input) {
    if (!input.includes("//") && !input.includes("\\n")) {
      return false;
    }

    if (input.includes("//") || input.includes("\\n")) {
      if (!input.includes("//") || !input.includes("\\n")) {
        throw new Error("[ERROR] 커스텀 구분자 설정이 잘못되었습니다.");
      }
    }

    return true;
  }

  getInput() {
    return Console.readLineAsync("덧셈할 문자열을 입력해 주세요.");
  }
  printResult(output) {
    Console.print(`결과 : ${output}`);
  }
}

export default App;
