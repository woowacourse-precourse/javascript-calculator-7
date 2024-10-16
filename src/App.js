import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const inputString = await Console.readLineAsync('계산할 문자열을 입력: ');
    let delimiters = [',', ':'];
    const customDelimiter = inputString.match(/\/\/(.*?)\\n/);

    if (customDelimiter) {
      delimiters.push(customDelimiter[1]);
    }
  }
}

export default App;
