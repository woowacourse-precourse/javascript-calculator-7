import { Console } from "@woowacourse/mission-utils";

class StringCalculator {
  #inputStr;
  #separators;

  constructor(inputStr) {
    this.#inputStr = inputStr;
    this.#separators = new Set([",", ":"]);
    this.#addCustomSeparator();
  }

  #addCustomSeparator() {
    const customSeparatorMatch = this.#inputStr.match(/\/{2}\D\\n/);

    if (!customSeparatorMatch || customSeparatorMatch.index !== 0) {
      return;
    }

    this.#separators.add(customSeparatorMatch[0][2]);
    this.#inputStr = this.#inputStr.slice(customSeparatorMatch[0].length);
  }

  calculateSum() {
    let separatorPattern = [...this.#separators].join("|");
    const numArr = this.#inputStr.split(new RegExp(separatorPattern));

    let sum = 0;
    numArr.forEach((num) => {
      const parsedNumber = Number(num);

      if (Number.isNaN(parsedNumber) || parsedNumber < 0) {
        throw new Error("[ERROR] 문자열의 형식이 틀렸습니다.");
      }

      sum += parsedNumber;
    });

    return sum;
  }
}

const getInputString = async () => {
  try {
    const numStr = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    return numStr;
  } catch (error) {
    throw new Error(`[ERROR] ${error.message}`);
  }
};

class App {
  async run() {
    try {
      const inputStr = await getInputString();
      const calculator = new StringCalculator(inputStr);
      const sum = calculator.calculateSum();
      Console.print(`결과 : ${sum}`);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default App;
