import { Console } from "@woowacourse/mission-utils";
import { PROMT_MESSAGE, ERROR_MESSAGE } from "./constants/message.js";

export default class Calculator {
  constructor(input) {
    this.inputString = input;
    this.separator = [",", ":"];
  }

  calculate() {
    this.checkInputValidation();
    const nums = this.parseNumber();
    Console.print(`${PROMT_MESSAGE.result} ${nums.reduce((a, c) => a + c)}`);
  }

  parseNumber() {
    const separatorReg = this.createSeparatorRegEx();
    return this.inputString.split(separatorReg).map(Number);
  }

  checkInputValidation() {
    this.validateCustomSeparator();
    this.validateAllowedChars();
    this.validateSeparatorUsage();
  }

  validateCustomSeparator() {
    const CUSTOM_SEPARATOR_PREFIX = "//";
    const CUSTOM_SEPARATOR_SUFFIX = "\\n";

    // //로 시작하는지 확인
    if (this.inputString.startsWith(CUSTOM_SEPARATOR_PREFIX)) {
      // \n으로 끝나는지 확인
      const separatorEndIndex = this.inputString.indexOf(
        CUSTOM_SEPARATOR_SUFFIX,
      );

      if (separatorEndIndex === -1) {
        throw new Error(ERROR_MESSAGE.invalidCustomSeparator);
      }

      const customSeparator = this.inputString.substring(2, separatorEndIndex);

      if (customSeparator.length === 0) {
        throw new Error(ERROR_MESSAGE.invalidCustomSeparator);
      }

      this.separator.push(customSeparator);
      this.inputString = this.inputString.substring(separatorEndIndex + 2);
    }
  }
  validateAllowedChars() {
    // separator, 숫자 이외의 문자가 포함됐는지 확인
    const validCharactersRegEx = new RegExp(
      `^[0-9${this.separator.join("")}\n]*$`,
    );

    if (!validCharactersRegEx.test(this.inputString)) {
      throw new Error(ERROR_MESSAGE.invalidInput);
    }
  }

  // separator가 연속적으로 오는지, separator로 끝나지는 않는지 확인
  validateSeparatorUsage() {
    const separatorReg = this.createSeparatorRegEx();
    const tokens = this.inputString.split(separatorReg);

    // separator로 끝나는지 확인
    const isEndingWithSeparator = tokens[tokens.length - 1] === "";
    if (isEndingWithSeparator) {
      throw new Error(ERROR_MESSAGE.endsWithSeparator);
    }

    // separator가 연속적으로 오는지 확인
    const hasConsecutiveSeparators = tokens.filter((v) => v === "").length > 0;
    if (hasConsecutiveSeparators) {
      throw new Error(ERROR_MESSAGE.consecutiveSeparators);
    }
  }

  createSeparatorRegEx() {
    // separator 배열을 기반으로 정규식을 생성하는 함수
    return new RegExp(`[${this.separator.join("")}]`);
  }
}
