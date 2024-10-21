import { ErrorMessages, DELIMITER_SECTION_START, INPUT_DELIMITER, EMPTY_STRING, DefaultDelimiters } from "./Strings.js";

class Splitter {
  static #DEFAULT_DELIMITERS = [DefaultDelimiters.FIRST_DELIMITER, DefaultDelimiters.SECOND_DELIMITER];

  static splitInput(input) {
    const result = input.split(INPUT_DELIMITER);
    if (result.length > 2) throw new Error(ErrorMessages.SPLITTER_SPLIT_INPUT);
    if (result.length === 1) result.unshift(EMPTY_STRING);
    return result;
  }

  static addDelimiter(delimiterSection) {
    if (delimiterSection === EMPTY_STRING) return;

    if (!delimiterSection.startsWith(DELIMITER_SECTION_START)) throw new Error(ErrorMessages.SPLITTER_ADD_DELIMITER);

    this.#DEFAULT_DELIMITERS.unshift(delimiterSection.slice(2));
  }

  static splitNumberSection(numberSection) {
    return this.#DEFAULT_DELIMITERS.reduce((acc, delimiter) => {
      return acc.flatMap(element => element.split(delimiter));
    }, [numberSection]);
  }
}

export default Splitter;