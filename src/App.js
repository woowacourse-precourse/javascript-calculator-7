import { Console } from "@woowacourse/mission-utils";

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
        this.handleCustomSeparator(strArr);
      } else if (isNaN(Number(char))) { // 숫자가 아닌 경우
        this.handleNotNumber();
      } else { // 숫자인 경우
        this.handleNumber();
      }
    }
  }

  handleCustomSeparator(strArr) {
    if (this.cursor === 0) {
      const customSeparatorPlaceholder = strArr.join('').substr(this.cursor, 6);
      const customSeparatorReg = new RegExp(/\/\/(\D{1})\\n/);

      if (customSeparatorReg.test(customSeparatorPlaceholder)) {
        const customSeparator = customSeparatorPlaceholder.match(customSeparatorReg)[1];
        this.separator.push(customSeparator);
        this.cursor += 5;
      } 
    } else {
      // handleNotNumber(); // "/"가 커스텀 구분자를 지정하기 위해 등장한게 아니라면 (숫자 사이 구분자로서 입력된 경우)
    }
  }

  handleNotNumber() {}

  handleNumber() {}
}

export default App;
