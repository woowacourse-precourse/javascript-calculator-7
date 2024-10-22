import InputHandler from './IOHandler.js'; 
import ERROR_MESSAGE from './constant/ErrorMsg.js';

const CUSTOM_SEPARATOR_FORMAT_LENGTH = 5;

class StringParser {
  constructor() {
    this.input = new InputHandler();
    this.cursor = 0;
    this.separator = [',', ':'];
    this.number = [];
    this.sum = 0;
  }

  handleCustomSeparator(char, strArr) {
    if (this.cursor === 0) {
      const customSeparatorPlaceholder = strArr.join('').substr(this.cursor, CUSTOM_SEPARATOR_FORMAT_LENGTH);
      const customSeparatorReg = new RegExp(/\/\/(\D{1})\\n/);

      if (customSeparatorReg.test(customSeparatorPlaceholder)) {
        const customSeparator = customSeparatorPlaceholder.match(customSeparatorReg)[1];
        if (!this.separator.includes(customSeparator)) this.separator.push(customSeparator);
        this.cursor += 5;
      } else {
        throw new Error(ERROR_MESSAGE.INVALID_CUSTOM_SEPARATOR_FORMAT);
      }
    } else {
      this.handleNotNumber(char, strArr); // "/"가 커스텀 구분자를 지정하기 위해 등장한게 아니라면 (숫자 사이 구분자로서 입력된 경우)
    }
  }

  handleNotNumber(char, strArr) {
    if (this.cursor === 0 || this.cursor === strArr.length - 1) {
      throw new Error(ERROR_MESSAGE.INVALID_INPUT);
    }

    if (this.separator.includes(char)) {
      this.sum += Number(this.number.join(''));
      this.number = [];
      this.cursor++;
    } else {
      throw new Error(ERROR_MESSAGE.NOT_SEPARATOR);
    }
  }

  handleNumber(char, strArr) {
    if (char === '0' && this.number.length === 0) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER);
    }

    this.number.push(char);
    if (this.cursor === strArr.length - 1) {
      this.sum += Number(this.number.join(''));
    }
    this.cursor++;
  }
}

export default StringParser;