import readline from "readline";

class App {
  async run() {
    const input = await this.getInput();
    const result = this.calculator(input);
    console.log(`결과: ${result}`);
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
      return 0; // 입력 없으면 0 반환
    }

    // 기본 구분자
    let separator = /,|:/;
    let numbersPart = input;

    // 입력을 // 로 시작했을 때 처리방법
    if (input.startsWith("//")) {
      // 문자 그대로 '\n'을 찾아야 함
      const endOfSeparatorIndex = input.indexOf("\\n");

      if (endOfSeparatorIndex === -1) {
        throw new Error("잘못된 입력: '\\n'을 찾을 수 없습니다.");
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

      // 입력으로 \n 을 받았을 때 +2 를 해줘야 한다 엔터랑은 다르다
      numbersPart = input.substring(endOfSeparatorIndex + 2).trim();
    }

    // 구분자를 기준으로 숫자 분리 및 변환
    const splitNumbers = numbersPart.split(separator).map((value) => {
      const trimmedValue = value.trim();
      if (trimmedValue === "") {
        return 0; // 빈 문자열이 있을 경우 0으로 처리
      }
      const num = Number(trimmedValue);

      return num;
    });

    const sum = splitNumbers.reduce((acc, curr) => acc + curr, 0); // 숫자들을 모두 더함
    return sum;
  }
}

export default App;
