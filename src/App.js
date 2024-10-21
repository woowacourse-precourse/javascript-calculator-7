import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const line = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n'
    );
    const result = this.calculate(line);
    Console.print(`결과 : ${result}`);
  }

  calculate = (line) => {
    if (!line) {
      throw new Error('[ERROR] 입력값이 없습니다.');
    }

    let delimiters = [',', ':'];
    let numbersString = line;

    const regex = new RegExp(`${delimiters.join('|')}`);

    let numbers = [];

    try {
      numbers = numbersString.split(regex).map((num) => {
        // console.log(`num: "${num}"`);
        return parseInt(num, 10);
      });
    } catch (error) {
      throw new Error('[ERROR] 잘못된 입력입니다.');
    }

    return numbers.reduce((acc, cur) => acc + cur, 0);
  };
}

export default App;
