import { DEFAULT_SEPARATOR, FORMAT, INDEX } from '../constants/value';

class Separation {
  #string;

  #separator = DEFAULT_SEPARATOR;

  constructor(input) {
    this.#string = input;
    this.#applyCustomFormat(input);
  }

  #applyCustomFormat(input) {
    const matches = input.match(FORMAT.custom);

    if (matches) {
      const matchedString = matches[INDEX.start];

      this.#updateSeparator(matchedString);
      this.#updateString(input, matchedString);
    }
  }

  #updateSeparator(matchedString) {
    const { separator, newline } = INDEX;

    this.#separator = matchedString.slice(separator, newline);
  }

  #updateString(input, matchedString) {
    this.#string = input.split(matchedString)[INDEX.next];
  }

  getNumbers() {
    const numbers = this.#string
      .split(this.#separator)
      .map((string) => Number(string));

    return numbers;
  }
}

export default Separation;
