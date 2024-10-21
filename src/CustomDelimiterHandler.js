import { CUSTOM_DELIMITER_INPUT } from './constants/Delimeters.js';

class CustomDelimiterHandler {
  #customDelimiter;

  #numbersString;

  constructor() {
    this.#customDelimiter = '';
    this.#numbersString = '';
  }

  #getNumbersString(string) {
    const startIndex = string.lastIndexOf(CUSTOM_DELIMITER_INPUT.start);
    const endIndex = string.lastIndexOf(CUSTOM_DELIMITER_INPUT.end);
    const numbersString = string.slice(endIndex + CUSTOM_DELIMITER_INPUT.end.length);
    const customDelimiterInput = string.slice(
      startIndex,
      endIndex + CUSTOM_DELIMITER_INPUT.end.length,
    );
    return { numbersString, customDelimiterInput };
  }

  #exportDelimiter(customDelimiterInput) {
    const customDelimiter = customDelimiterInput
      .split(CUSTOM_DELIMITER_INPUT.start)
      .flatMap((el) => el.split(CUSTOM_DELIMITER_INPUT.end))
      .filter((el) => el)
      .join('');
    return customDelimiter;
  }

  #seperateCustomDelimiter(string) {
    const startIndex = string.lastIndexOf(CUSTOM_DELIMITER_INPUT.start);
    if (startIndex !== 0) return this.#handleWithoutCustomDelimiter(string);
    return this.#handleWithCustomDelimiter(string);
  }

  #handleWithoutCustomDelimiter(string) {
    this.#customDelimiter = '';
    this.#numbersString = string;
  }

  #handleWithCustomDelimiter(string) {
    const { numbersString, customDelimiterInput } = this.#getNumbersString(string);
    const customDelimiter = this.#exportDelimiter(customDelimiterInput);
    this.#customDelimiter = customDelimiter;
    this.#numbersString = numbersString;
  }

  getCustomDelimiterAndNumbersString(string) {
    this.#seperateCustomDelimiter(string);
    return {
      customDelimiter: this.#customDelimiter,
      numbersString: this.#numbersString,
    };
  }
}

export default CustomDelimiterHandler;
