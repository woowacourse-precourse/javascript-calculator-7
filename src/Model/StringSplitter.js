export default class StringSplitter {
  #DEFAULT_VALID_PATTERN = /^\d+([,:]\d+)*$/;

  #delimiters;

  #string;

  constructor(input) {
    if (input.length === 0) {
      this.#string = '';
    }

    if (this.#DEFAULT_VALID_PATTERN.test(input)) {
      this.#delimiters = /[,:]/;
      this.#string = input;
    }
  }

  split() {
    return this.#string.split(this.#delimiters);
  }
}
