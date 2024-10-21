class Validator {
  #input;
  #delimiter;

  /**
   * @param {string} input - 검증할 입력 문자열
   */

  constructor(input) {
    this.#input = input;
    this.#delimiter = ',|:';

    this.#extractCustomDelimiter();
  }

  // 커스텀 구분자 추출
  #extractCustomDelimiter() {
    if (this.#input.startsWith('//')) {
      const splitedInput = this.#input.split('\\n');

      if (splitedInput.length < 2) {
        throw new Error('[ERROR] 커스텀 구분자 형식이 올바르지 않습니다.');
      }

      const customDelimiter = splitedInput[0].substring(2);

      this.#delimiter += `|${this.#escaperRegExp(customDelimiter)}`;
      this.#input = splitedInput[1];
    }
  }

  // 특수문자 이스케이프 처리
  #escaperRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}

export default Validator;
