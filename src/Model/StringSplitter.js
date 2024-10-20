export default class StringSplitter {
  #DEFAULT_VALID_PATTERN = /^\d+([,:]\d+)*$/;

  #CUSTOM_DELIMITER_PATTERN = /^\/\/(.)\\n/;

  #delimiters;

  string;

  constructor(input) {
    if (input.length === 0) {
      this.string = '';
      return;
    }

    if (this.#DEFAULT_VALID_PATTERN.test(input)) {
      this.string = input;
      this.#delimiters = /[,:]/;
      return;
    }

    const found = input.match(this.#CUSTOM_DELIMITER_PATTERN);
    if (found) {
      const [fullMatch, delimiter] = found;
      this.string = input.slice(fullMatch.length);
      this.#delimiters = delimiter;
    }
  }

  split() {
    this.string = this.string.split(this.#delimiters);
    return this;
  }

  toNumbers() {
    return this.string.map(Number);
  }
}
