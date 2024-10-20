import { Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.isError = false;
  }

  async checkSeparator(str) {
    const re = /\/\/[\D]+\\n/g;   // 커스텀 구분자 찾는 정규식
    const customSeperatorIndex = str.search(re);  // 커스텀 구분자 인덱스 찾기
    if (customSeperatorIndex === -1) {    // 커스텀 구분자가 없는 경우 문자열 그대로 반환
      return;
    }
    return str[customSeperatorIndex + 2]; // 커스텀 구분자 반환
  }

  async separateNumber(str, customSeperator) {
    const refactoredStr = str.replace('\/\/', '').replace('\\n', '');  // 문자열에서 '//', '\n' 제거

    const existingSeperators = [',', ':'];
    existingSeperators.push(customSeperator);

    const regex = new RegExp(existingSeperators.join('|'), 'g');  // 숫자로 나눌 정규식 생성

    const numberArray = refactoredStr.split(regex);
    return numberArray;
  }

  async getSum(strNumArr) {
    let sum = 0;
    strNumArr.map((str) => {
      const strNum = Number(str);
      if (strNum <= 0 || isNaN(strNum)) {
        if (!(str === '')) {
          this.isError = true;
          return -1;
        }
      }
      sum += strNum;
    });
    return sum;
  }

  async run() {
    const inputString = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요\n');
    const customSeperator = await this.checkSeparator(inputString);
    const separatedNumberArray = await this.separateNumber(inputString, customSeperator);
    const sum = await this.getSum(separatedNumberArray);

    if (!this.isError) {
      Console.print(`결과 : ${sum}`);
    } else {
      throw new Error('[ERROR]');
    }
  }
}

export default App;
