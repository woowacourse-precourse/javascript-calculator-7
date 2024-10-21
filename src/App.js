import { Console } from "@woowacourse/mission-utils";

const CUSTOM_SEPARATOR_FORMAT_LENGTH = 5;

class App {
  constructor() {
    this.cursor = 0;
    this.separator = [',', ':'];
    this.number = [];
    this.sum = 0;
  }

  async run() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    const strArr = input.trim().split('');
    
    while (this.cursor < strArr.length) {
      const char = strArr[this.cursor];

      if (char === '/') { // "/"로 시작하는 경우
        this.handleCustomSeparator(char, strArr);
      } else if (isNaN(Number(char))) { // 숫자가 아닌 경우
        this.handleNotNumber(char, strArr);
      } else { // 숫자인 경우
        this.handleNumber(char, strArr);
      }
    }

    Console.print(`결과 : ${this.sum}`);
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
        throw new Error('[ERROR] 입력 형식을 다시 확인해 주세요. 커스텀 구분자를 지정하려면 "//[1자리의 숫자가 아닌 문자]\n" 형식으로 입력해 주세요. (ex. "//;\n1;2;3")');
      }
    } else {
      this.handleNotNumber(char, strArr); // "/"가 커스텀 구분자를 지정하기 위해 등장한게 아니라면 (숫자 사이 구분자로서 입력된 경우)
    }
  }

  handleNotNumber(char, strArr) {
    if (this.cursor === 0 || this.cursor === strArr.length - 1) {
      throw new Error('[ERROR] 입력 형식을 다시 확인해 주세요.');
    }

    if (this.separator.includes(char)) {
      this.sum += Number(this.number.join(''));
      this.number = [];
      this.cursor++;
    } else {
      throw new Error('[ERROR] 구분자 외의 문자가 포함되어 있습니다.');
    }
  }

  handleNumber(char, strArr) {
    if (char === '0' && this.number.length === 0) {
      throw new Error('[ERROR] 입력값은 구분자와 양수로 구성되어야 합니다.');
    }

    this.number.push(char);
    if (this.cursor === strArr.length - 1) {
      this.sum += Number(this.number.join(''));
    }
    this.cursor++;
  }
}

export default App;
