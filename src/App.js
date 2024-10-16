import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const inputString = await Console.readLineAsync('계산할 문자열을 입력: ');

    if (!inputString) {
      Console.print('결과 : 0');
      return;
    }

    let delimiters = [',', ':'];
    const customDelimiter = inputString.match(/\/\/(.*?)\\n/);
    let numbers = inputString;

    if (customDelimiter) {
      delimiters.push(customDelimiter[1]);
      numbers = inputString.split('\\n')[1];
    }

    const delimiterRegex = new RegExp(`[${delimiters.join('')}]`);
    const numberArray = numbers.split(delimiterRegex);

    const hasInvalidNumber = numberArray.some((num) => !/^\d+$/.test(num));
    if (hasInvalidNumber) {
      throw new Error('[ERROR] 잘못된 값이 입력되었습니다.');
    }

    const sum = numberArray.reduce((acc, num) => acc + parseInt(num), 0);
    Console.print(`결과 : ${sum}`);
  }
}

export default App;
