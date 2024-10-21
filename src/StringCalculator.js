import Separator from './Separator.js';

class StringCalculator {
  #inputStr;
  #separator;

  constructor(inputStr) {
    this.#inputStr = inputStr;
    this.#separator = new Separator();

    // 커스텀 구분자가 있다면 구분자 목록에 추가하고 커스텀 구분자를 제외한 나머지 문자열을 받아 저장
    this.#inputStr = this.#separator.addCustomSeparator(this.#inputStr);
  }

  #validateAndParseNumber(num) {
    const parsedNumber = Number(num);

    if (Number.isNaN(parsedNumber)) {
      throw new Error('잘못된 문자열 형식입니다.');
    }

    if (parsedNumber < 0) {
      throw new Error('음수는 허용하지 않습니다.');
    }

    return parsedNumber;
  }

  calculateSum() {
    const separatorPattern = this.#separator.getSeparatorPattern();

    // 구분자들을 기준으로 분리
    const numArr = this.#inputStr.split(new RegExp(separatorPattern));

    const sum = numArr.reduce(
      (total, num) => total + this.#validateAndParseNumber(num),
      0
    );

    return sum;
  }
}

export default StringCalculator;
