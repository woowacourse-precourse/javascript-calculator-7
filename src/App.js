import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const basicDelimiter = [",", ":"];
    let input = await this.getInput();

    if (input.length === 0) {
      this.printResult(0);
    }

    const [customDelimiter, remain] = this.extractDelimiter(input);
    const delimiter = new Set(basicDelimiter.concat(customDelimiter));

    const nums = this.divideNumsByhDelimiters(remain, delimiter);
    const answer = nums.reduce((acc, num) => acc + num, 0);

    this.printResult(answer);
  }

  divideNumsByhDelimiters(input, delimiter) {
    if (input.length === 0) {
      return [0];
    }

    const result = [];

    let num = "";
    for (let st of input) {
      if (isNaN(st)) {
        if (!delimiter.has(st)) {
          if (st === "-") {
            throw new Error("[ERROR] 음수가 입력되었습니다.");
          }
          throw new Error(
            "[ERROR] 지정된 구분자 외의 구분자가 입력되었습니다."
          );
        }
        result.push(Number(num));
        num = "";
        continue;
      }
      num += st;
    }
    if (num.length > 0) {
      result.push(Number(num));
    }
    return result;
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
