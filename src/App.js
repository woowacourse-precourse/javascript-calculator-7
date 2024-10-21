import { Console } from '@woowacourse/mission-utils';
import getCustomSeparator from './getCustomSeparator.js';
import getNumberFromData from './getNumberFromData.js';

class App {
  async run() {
    const data = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    let separator = ',:';
    let sum = 0;

    if (data.includes('\\n')) {
      const partsOfData = data.split('\\n');
      separator = getCustomSeparator(partsOfData[0], separator);     
      sum = getNumberFromData(partsOfData[1], separator, sum);
    } else {
      sum = getNumberFromData(data, separator, sum);
    }

    Console.print(`결과 : ${sum}`);
  }
}

export default App;
