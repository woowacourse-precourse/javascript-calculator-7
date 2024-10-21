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

    if (Number.isNaN(parsedNumber)) {
      throw new Error("잘못된 문자열 형식입니다.");
    }

    if (parsedNumber < 0) {
      throw new Error("음수는 허용하지 않습니다.");
    }

    return parsedNumber;
  }
}

export default StringCalculator;
