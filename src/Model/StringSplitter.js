export default class StringSplitter {
  #DEFAULT_VALID_PATTERN = /^\d+([,:]\d+)*$/;

  #CUSTOM_DELIMITER_PATTERN = /^\/\/(.)\\n/;

  string;

  #delimiters;

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

    // 커스텀 구분자 검사
    const found = input.match(this.#CUSTOM_DELIMITER_PATTERN);
    if (found) {
      const [fullMatch, delimiter] = found;
      this.string = input.slice(fullMatch.length);
      this.#delimiters = delimiter;
      return;
    }

    throw new Error('[ERROR] 유효하지 않은 문자열입니다.');
  }

  split() {
    this.string = this.string.split(this.#delimiters);
    return this;
  }

  toNumbers() {
    return this.string.map(Number);
  }
}
