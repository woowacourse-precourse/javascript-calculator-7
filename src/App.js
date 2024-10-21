import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    let numbers = [];

    const userInput = await Console.readLineAsync(
      "덧셈할 문자열을 입력하여 주세요.\n"
    );

    if (userInput.startsWith("//") && userInput.indexOf("\\n") !== -1) {
      const finishIdx = userInput.indexOf("\\n");
      const customDelimiter = userInput.substring(2, finishIdx);
      if (!isNaN(customDelimiter)) {
        throw new Error("[ERROR]잘못된 구분자 입력");
      }
      numbers = userInput.substring(finishIdx + 2).split(customDelimiter);
    } else {
      numbers = userInput.split(/,|:/);
    }

    if (numbers.includes("")) {
      throw new Error("[ERROR]빈 값이 입력되었습니다.");
    }
    if (/-/.test(numbers)) {
      throw new Error("[ERROR]음수가 입력되었습니다.");
    }

    const SUM = numbers.reduce((sum, number) => {
      if (isNaN(number)) {
        throw new Error("[ERROR] 잘못된 입력");
      }
      return sum + Number(number);
    }, 0);

    Console.print(`결과 : ${SUM}`);
  }
}

export default App;
