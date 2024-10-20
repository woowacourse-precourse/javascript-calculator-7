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
      const [delimiterString, customDelimiter] = found;
      this.string = input.slice(delimiterString.length);
      // 커스텀 구분자와 기본 구분자를 합친 정규표현식 생성
      this.#delimiters = new RegExp(`[${customDelimiter},:]`);
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
