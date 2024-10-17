import { DEFAULT_SEPARATOR, FORMAT, INDEX } from '../constants/value';

class Validation {
  static #MESSAGE = Object.freeze({
    size: '[ERROR] 빈 문자열입니다. 한 글자 이상의 문자열을 입력해주세요.',
    notNumber: '[ERROR] 숫자가 아닌 다른 문자 혹은 빈 문자를 입력했습니다.',
    rangeNumber: '[ERROR] 1 이상의 숫자를 구분자로 구분하여 입력해주세요.',
    format:
      '[ERROR] 잘못된 형식을 입력했습니다. 쉼표(,) 또는 콜론(:)을 구분자로 하거나 문자열 앞부분의 "//"와 "\\n" 사이에 구분자를 가지는 문자열을 입력하세요.',
  });

  #input;

  constructor(input) {
    this.#input = input;
    this.#validate();
  }

  #validate() {
    this.#validateSize();
    this.#validateFormat();
  }

  #validateSize() {
    if (this.#input.length === 0) {
      throw new Error(Validation.#MESSAGE.size);
    }
  }

  #validateFormat() {
    const defaultMatches = this.#input.match(FORMAT.default);
    const customMatches = this.#input.match(FORMAT.custom);

    if (defaultMatches) {
      return this.#validateDefaultFormat(this.#input);
    }

    if (customMatches) {
      return this.#validateCustomFormat(customMatches[INDEX.start]);
    }

    throw new Error(Validation.#MESSAGE.format);
  }

  #validateDefaultFormat() {
    this.#input.split(DEFAULT_SEPARATOR).forEach((string) => {
      Validation.#validateElement(string);
    });
  }

  #validateCustomFormat(match) {
    const separator = match.slice(INDEX.separator, INDEX.newline);
    const updatedInput = this.#input.split(match)[INDEX.next];

    updatedInput.split(separator).forEach((string) => {
      Validation.#validateElement(string);
    });
  }

  static #validateElement(string) {
    const number = Number(string);

    Validation.#validateEmpty(string);
    Validation.#validateNumber(number);
    Validation.#validatePositiveInteger(number);
  }

  static #validateEmpty(string) {
    if (string.length === 0) {
      throw new Error(Validation.#MESSAGE.notNumber);
    }
  }

  static #validateNumber(number) {
    if (!Number.isSafeInteger(number)) {
      throw new Error(Validation.#MESSAGE.notNumber);
    }
  }

  static #validatePositiveInteger(number) {
    if (number <= 0) {
      throw new Error(Validation.#MESSAGE.rangeNumber);
    }
  }
}

export default Validation;
