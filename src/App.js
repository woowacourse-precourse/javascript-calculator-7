import { Console } from "@woowacourse/mission-utils";

class NumStr {
  #str;
  #separations;

  constructor(str) {
    this.#str = str;
    this.#separations = new Set([":", ","]);
    this.#addCustomSeparation();
  }

  #addCustomSeparation() {
    const customStr = this.#str.match(/\/{2}\D\\n/);

    if (customStr === null || customStr.index !== 0) {
      return;
    }

    this.#separations.add(customStr[0][2]);
    this.#str = this.#str.slice(customStr[0].length);
  }

  getSumOfStr() {
    let regExp = [...this.#separations].join("|");
    const numArr = this.#str.split(new RegExp(regExp));

    let sum = 0;
    numArr.forEach((num) => {
      const number = Number(num);

      if (Number.isNaN(number) || number < 0) {
        throw new Error("[ERROR] 문자열의 형식이 틀렸습니다.");
      }

      sum += number;
    });

    return sum;
  }
}

const getNumberString = async () => {
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
      const numStr = new NumStr(await getNumberString());
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default App;
