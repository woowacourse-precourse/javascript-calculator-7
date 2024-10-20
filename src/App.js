import { Console } from "@woowacourse/mission-utils";

class App {
  //parse user input using both custom delimiters and default delimiters
  parseInput(userInput) {
    let delimetersPattern = "[,:]";
    let input = userInput;
    let customDelimetersArray = [];

    while (input.startsWith("//")) {
      if (input.includes("\\n")) {
        const customDelimeter = input.slice(2, input.indexOf("\\n"));
        if (customDelimeter === ".") {
          throw new Error(
            "[ERROR] : (.)은 커스텀 구분자로 사용할 수 없습니다."
          );
        }
        customDelimetersArray.push(customDelimeter);
        input = input.slice(input.indexOf("\\n") + 2);
      } else {
        throw new Error("[ERROR] : 커스텀 구분자 지정 패턴이 잘못되었습니다.");
      }
    }
    console.log("🚩 custom delimeters :", customDelimetersArray);
    if (customDelimetersArray.length) {
      delimetersPattern = `[,:${customDelimetersArray.join("")}]`;
    }

    const delimetersRegExp = new RegExp(delimetersPattern);
    const parsedInput = input.split(delimetersRegExp);

    return parsedInput;
  }

  async run() {
    //get user input
    const userInput = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    Console.print(`🚩 raw input : ${userInput}`);

    // check user input
    if (/^[^\d,:]/.test(userInput)) {
      if (!userInput.startsWith("//") || !userInput.includes("\\n")) {
        throw new Error(
          "[ERROR] : 입력값은 숫자, 기본 구분자, 커스텀 구분자 지정 패턴 (//\n) 으로 시작하는 문자열이어야합니다."
        );
      }
    }

    if (userInput) {
      //parse user input
      const parsedInput = this.parseInput(userInput);
      console.log("🚩 parsed input :", parsedInput);

      // check user input 2 (after parsing)
      parsedInput.forEach((el) => {
        if (isNaN(Number(el))) {
          throw new Error(
            "[ERROR] : 기본 구분자, 지정한 커스텀 구분자가 아닌 구분자가 문자열에 포함되어있습니다."
          );
        }
        if (Number(el) < 0) {
          throw new Error(
            "[ERROR] : 입력값에는 양수만 포함되어야합니다. (만약 (-)를 구분자로 사용하고 싶다면 커스텀 구분자로 (-)를 지정해주세요.)"
          );
        }
      });

      //sum numbers
      const output = parsedInput.reduce((acc, cur) => acc + Number(cur), 0);
      Console.print(`결과 : ${output}`);
    } else {
      Console.print(0);
    }
  }
}

export default App;
