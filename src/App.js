import { Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.delimiters = [',', ':'];
  }

  async run() {
    let str = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

    let sum = 0;
    let numberTmp = '';

    for (let i = 0; i < str.length; i += 1) {
      if (this.delimiters.includes(str[i])) {
        sum += Number(numberTmp);
        numberTmp = '';
        continue;
      }

      numberTmp += str[i];
    }

    sum += Number(numberTmp);
    Console.print(`결과 : ${sum}`);
  }
}

export default App;