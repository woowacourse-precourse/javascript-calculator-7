class Validator {
  #input;
  #numbers;
  #delimiter;

  /**
   * @param {string} input - 검증할 입력 문자열
   */

  constructor(input) {
    this.#input = input;
    this.#delimiter = ',|:';

    this.#extractCustomDelimiter();
    this.#parseInput();
    this.#validate();
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

  // 입력값을 구분자로 나눠서 배열에 저장
  #parseInput() {
    const regex = new RegExp(`[${this.#delimiter}]`);
    this.#numbers = this.#input.split(regex);
  }

  // 구분자로 나눈 값에 대하여 전부 검증
  #validate() {
    for (const num of this.#numbers) {
      this.#validateNumberFormat(num);
    }
  }

  // 숫자 형식 검증
  #validateNumberFormat(num) {
    if (!/^\d+$/.test(num)) {
      throw new Error(`[ERROR] '${num}'은(는) 유효한 숫자 형식이 아닙니다.`);
    }
  }
}

export default Validator;
