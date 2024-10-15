import { ERROR_MESSAGE } from "./constants/message.js";

export default class Calculator {
  constructor(input) {
    this.inputString = input;
    this.separator = [",", ":"];
  }

  async parseNumber() {
    this.checkInputValidation(this.inputString);

    let separatorReg = new RegExp(`[${this.separator.join("")}]`);

    return this.inputString.split(separatorReg).map(Number);
  }

  checkInputValidation(input) {
    this.validateCustomSeparator(input);
  }

  validateCustomSeparator(input) {
    if (input.startsWith("//")) {
      const separatorEndIndex = input.indexOf("\\n");

      if (separatorEndIndex === -1) {
        throw new Error(ERROR_MESSAGE.invalidCustomSeparator);
      }
      const customSeparator = input.substring(2, separatorEndIndex);
      if (customSeparator.length === 0) {
        throw new Error(ERROR_MESSAGE.invalidCustomSeparator);
      }
      this.separator.push(customSeparator);
      this.inputString = input.substring(separatorEndIndex + 2);
    }
  }
  validateCharIncluded(input) {}
  validateSeparatorInSeries(input) {}
}
