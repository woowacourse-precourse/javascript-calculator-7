import { Console } from "@woowacourse/mission-utils";

class App {
  separator = new Set(":", ",");

  findCustomSeparator = (input) => {
    // 커스텀 구분자가 있는지 확인한다.
    // "//"와 "\n" 사이에 위치하는 문자를 커스텀 구분자로 사용한다
    let userInput = input.slice(); // 불변성 유지
    const regex = /\/\/(.*?)\\n/;
    while (userInput.match(regex)) {
      const customSeparator = userInput.match(regex);

      if (customSeparator) {
        this.separator.add(customSeparator[1]);
      }
      userInput = userInput.replace(regex, "");
    }

    return userInput;
  };

  solve = (input) => {
    try {
      if (input.length === 0) {
        console.log("결과 :", 0);
      } else {
        const seperatedInput = this.findCustomSeparator(input);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  async run() {
    // 사용자로부터 덧셈할 문자열을 입력받는다.
    // this.solve("4;2;//;\n1;//-\n2;3");
    Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n").then((input) => {
      this.solve(input);
    });
  }
}

export default App;
