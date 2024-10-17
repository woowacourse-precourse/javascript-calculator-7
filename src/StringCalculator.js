import Separator from "./Separator.js";

class StringCalculator {
  #inputStr;
  #separator;

  constructor(inputStr) {
    this.#inputStr = inputStr;
    this.#separator = new Separator();
    this.#inputStr = this.#separator.addCustomSeparator(this.#inputStr);
  }

  calculateSum() {
    const separatorPattern = this.#separator.getSeparatorPattern();
    const numArr = this.#inputStr.split(new RegExp(separatorPattern));

    const sum = numArr.reduce((total, num) => {
      return total + this.#validateAndParseNumber(num);
    }, 0);

    return sum;
  }

  #validateAndParseNumber(num) {
    const parsedNumber = Number(num);

    if (Number.isNaN(parsedNumber) || parsedNumber < 0) {
      throw new Error("문자열의 형식이 잘못됐습니다.");
    }

    return parsedNumber;
  }
}

export default StringCalculator;
