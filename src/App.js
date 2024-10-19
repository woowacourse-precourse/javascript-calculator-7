import readline from "readline";

class App {
  async run() {
    try {
      const input = await this.get_input();
      const result = this.calculator(input);
      console.log(`결과: ${result}`);
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }

  get_input() {
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
    let numbers_part = input;

    // 입력을 // 로 시작했을 때 처리방법
    if (input.startsWith("//")) {
      const end_of_separator_index = input.indexOf("\\n");

      if (end_of_separator_index === -1) {
        throw new Error("[ERROR]");
      }

      const custom_separators = input
        .substring(2, end_of_separator_index)
        .split("");

      if (custom_separators.length > 0) {
        // 각각의 구분자로 처리할 수 있도록 이스케이프 처리 필요함
        const escaped_custom_separators = custom_separators.map((sep) =>
          sep.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        );

        separator = new RegExp(escaped_custom_separators.join("|") + "|,|:");
      }

      numbers_part = input.substring(end_of_separator_index + 2).trim();
    }

    // 구분자를 기준으로 숫자 분리 및 변환
    const split_numbers = numbers_part.split(separator).map((value) => {
      const trimmed_value = value.trim();
      if (trimmed_value === "") {
        throw new Error("[ERROR]");
      }

      const num = Number(trimmed_value);
      if (isNaN(num)) {
        throw new Error("[ERROR]");
      }

      return num;
    });

    const sum = split_numbers.reduce((acc, curr) => acc + curr, 0);
    return sum;
  }
}

export default App;
