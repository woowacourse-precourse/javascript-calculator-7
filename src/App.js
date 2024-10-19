import readline from "readline";

class App {
  async run() {
    try {
      const input = await this.getInput();
      const result = this.calculator(input);
      console.log(`결과: ${result}`);
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }

  getInput() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    return new Promise((resolve) => {
      rl.question("숫자 입력: ", (answer) => {
        rl.close();
        resolve(answer);
      });
    });
  }

  calculator(input) {
    if (input === "") {
      throw new Error("[ERROR]");
    }

    // 기본 구분자
    let separator = /,|:/;
    let numbersPart = input;

    // 입력을 // 로 시작했을 때 처리방법
    if (input.startsWith("//")) {
      const endOfSeparatorIndex = input.indexOf("\\n");

      if (endOfSeparatorIndex === -1) {
        throw new Error("[ERROR]");
      }

      const customSeparators = input
        .substring(2, endOfSeparatorIndex)
        .split("");

      if (customSeparators.length > 0) {
        // 각각의 구분자로 처리할 수 있도록 이스케이프 처리 필요함
        const escapedCustomSeparators = customSeparators.map((sep) =>
          sep.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        );

        separator = new RegExp(escapedCustomSeparators.join("|") + "|,|:");
      }

      numbersPart = input.substring(endOfSeparatorIndex + 2).trim();
    }

    // 구분자를 기준으로 숫자 분리 및 변환
    const splitNumbers = numbersPart.split(separator).map((value) => {
      const trimmedValue = value.trim();
      if (trimmedValue === "") {
        throw new Error("[ERROR]");
      }

      const num = Number(trimmedValue);
      if (isNaN(num)) {
        throw new Error("[ERROR]");
      }

      return num;
    });

    const sum = splitNumbers.reduce((acc, curr) => acc + curr, 0);
    return sum;
  }
}

export default App;
