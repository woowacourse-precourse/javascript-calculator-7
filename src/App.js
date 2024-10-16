import { Console } from "@woowacourse/mission-utils";

class App {
  separator = [":", ","];

  splitBySeparator = (input) => {
    // 입력받은 문자열을 구분자로 나눈다.
    if (input.length === 0) {
      return 0;
    }

    // 커스텀 구분자가 있는지 확인한다.
    // "//"와 "\n" 사이에 위치하는 문자를 커스텀 구분자로 사용한다
    const regex = /\/\/(.*?)\n/;
    while (input.match(regex)) {
      const customSeparator = input.match(regex);

      if (customSeparator) {
        this.separator.push(customSeparator[1]);
      }
      input = input.replace(regex, "");
    }
  };

  solve = (input) => {
    try {
      const seperatedInput = this.splitBySeparator(input);
    } catch (error) {
      console.error(error.message);
    }
  };

  async run() {
    // 사용자로부터 덧셈할 문자열을 입력받는다.
    // this.solve("4;2;//;\n1;//-\n2;3");
    Console.readLineAsync("덧셈할 문자열을 입력해 주세요.").then((input) => {
      this.solve(input);
    });
  }
}

export default App;
