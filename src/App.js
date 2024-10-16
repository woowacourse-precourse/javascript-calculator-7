import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const inputString = await Console.readLineAsync('계산할 문자열을 입력: ');
    let delimiters = [',', ':'];
    const customDelimiter = inputString.match(/\/\/(.*?)\\n/);
    let numbers = inputString;

    if (customDelimiter) {
      delimiters.push(customDelimiter[1]);
      numbers = inputString.split('\\n')[1];
    }

    const delimiterRegex = new RegExp(`[${delimiters.join('')}]`);
    const numberArray = numbers.split(delimiterRegex);
  }
}

export default App;
