import { Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.delimiters = [',', ':'];
  }

  async readCustomDelimiters(str) {
    if (str[0] === '/') {
      if (str[1] !== '/') {
        throw new Error('[ERROR] 커스텀 구분자를 지정하려면 //커스텀 구분자\\n 형식으로 입력하세요.');
      }

      let endOfCustomDelimeters = 0;

      for (let i = 2; i < str.length; i += 1) {
        if (str[i] === '\\' && str[i + 1] === 'n') {
          endOfCustomDelimeters = i + 2;
          break;
        }

        this.delimiters.push(str[i]);

        if (i === str.length - 1) {
          throw new Error('[ERROR] 커스텀 구분자를 지정하려면 //커스텀 구분자\\n 형식으로 입력하세요.');
        }
      }

      return str.slice(endOfCustomDelimeters, str.length);
    }

    return str;
  }

  async run() {
    let str = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

    str = await this.readCustomDelimiters(str);

    let sum = 0;
    let numberTmp = '';

    for (let i = 0; i < str.length; i += 1) {
      if (this.delimiters.includes(str[i])) {
        sum += Number(numberTmp);
        numberTmp = '';
        continue;
      }

      if (str[i] !== '.' && Number.isNaN(Number(str[i]))) {
        throw new Error(`[ERROR] ${str[i]} 는 지정된 구분자 또는 숫자가 아닙니다.`);
      }

      numberTmp += str[i];
    }

    sum += Number(numberTmp);
    Console.print(`결과 : ${sum}`);
  }
}

export default App;