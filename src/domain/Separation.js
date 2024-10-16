import { SPECIAL_CHARACTERS } from '../constants/value';

class Separation {
  static #INDEX = { start: 0, end: 1, separator: 2 };

  #string;

  #separator;

  constructor(input) {
    this.#setDefaultSeparator();
    this.#updateSeparator(input);
    this.#updateString(input);
  }

  #setDefaultSeparator() {
    const { colon, comma } = SPECIAL_CHARACTERS;

    this.#separator = new RegExp(`[${colon + comma}]`);
  }

  #updateSeparator(input) {
    const { slash, newline } = SPECIAL_CHARACTERS;
    const { start, separator } = Separation.#INDEX;
    const doubleSlashIndex = input.indexOf(slash + slash);
    const newlineIndex = input.indexOf(newline);

    if (doubleSlashIndex === start && newlineIndex >= separator + 1) {
      this.#separator = input.slice(separator, newlineIndex);
    }
  }

  #updateString(input) {
    const { newline } = SPECIAL_CHARACTERS;
    const { end } = Separation.#INDEX;

    if (input.includes(newline)) {
      this.#string = input.split(newline)[end] || '';
    } else {
      this.#string = input;
    }
  }

  getNumbers() {
    const numbers = this.#string
      .split(this.#separator)
      .map((string) => Number(string));

    return numbers;
  }
}

export default Separation;
