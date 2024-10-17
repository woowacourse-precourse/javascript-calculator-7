class StringCalculator {
  #inputStr;
  #separators;

  constructor(inputStr) {
    this.#inputStr = inputStr;
    this.#separators = new Set([",", ":"]);
    this.#addCustomSeparator();
  }

  #addCustomSeparator() {
    const customSeparatorPattern = /^\/\/(.)\\n/;
    const customSeparatorMatch = this.#inputStr.match(customSeparatorPattern);

    if (!customSeparatorMatch) {
      return;
    }

    const customSeparator = customSeparatorMatch[1];
    this.#separators.add(customSeparator);
    this.#inputStr = this.#inputStr.slice(customSeparatorMatch[0].length);
  }

  calculateSum() {
    const separatorPattern = [...this.#separators].join("|");
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
