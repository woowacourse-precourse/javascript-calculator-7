import { Console } from "@woowacourse/mission-utils";

class App {
  addStrNumsArray(strNumsArray) {
    const sortedStrNumsArray = strNumsArray.sort(
      (a, b) =>
        Number(b.length - 1 - b.indexOf(".")) -
        Number(a.length - 1 - a.indexOf("."))
    );

    const expectedDecimalPlaces =
      sortedStrNumsArray[0].length - 1 - sortedStrNumsArray[0].indexOf(".");

    const result = sortedStrNumsArray
      .reduce((acc, cur) => acc + Number(cur), 0)
      .toFixed(expectedDecimalPlaces);

    return Number(result);
  }

  createDelimetersRegExpPattern(delimetersArray) {
    const sortedDelimetersArray = delimetersArray.sort(
      (a, b) => b.length - a.length
    );

    const delimetersPatternArray = sortedDelimetersArray.map((delimeter) => {
      if (/[.*+?^${}()|[\]\\]/.test(delimeter)) {
        let delimeterWithEscape = "";
        for (let i = 0; i < delimeter.length; i++) {
          if (/[.*+?^${}()|[\]\\]/.test(delimeter[i])) {
            delimeterWithEscape = delimeterWithEscape + `\\${delimeter[i]}`;
          } else {
            delimeterWithEscape = delimeterWithEscape + `${delimeter[i]}`;
          }
        }
        return delimeterWithEscape;
      }
      return delimeter;
    });

    return delimetersPatternArray.join("|");
  }

  parseInput(userInput) {
    const PATTERN_OFFSET = 2;
    let input = userInput;
    let delimetersArray = [",", ":"];

    while (input.startsWith("//")) {
      if (input.includes("\\n")) {
        const customDelimeter = input.slice(
          PATTERN_OFFSET,
          input.indexOf("\\n")
        );
        if (customDelimeter === ".") {
          throw new Error(
            "[ERROR] : (.)은 커스텀 구분자로 사용할 수 없습니다."
          );
        }
        delimetersArray.push(customDelimeter);
        input = input.slice(input.indexOf("\\n") + PATTERN_OFFSET);
      } else {
        throw new Error("[ERROR] : 커스텀 구분자 지정 패턴이 잘못되었습니다.");
      }
    }

    const delimetersRegExpPattern =
      this.createDelimetersRegExpPattern(delimetersArray);

    const delimetersRegExp = new RegExp(delimetersRegExpPattern);
    const parsedInput = input.split(delimetersRegExp);

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

    return parsedInput;
  }

  async run() {
    const userInput = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    if (/^[^\d,:]/.test(userInput)) {
      if (!userInput.startsWith("//") || !userInput.includes("\\n")) {
        throw new Error(
          "[ERROR] : 입력값은 숫자, 기본 구분자, 커스텀 구분자 지정 패턴 (//\n) 으로 시작하는 문자열이어야합니다."
        );
      }
    }

    if (userInput) {
      const parsedInput = this.parseInput(userInput);
      const output = this.addStrNumsArray(parsedInput);
      Console.print(`결과 : ${output}`);
    } else {
      Console.print(0);
    }
  }
}

export default App;
