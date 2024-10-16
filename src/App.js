import { Console } from '@woowacourse/mission-utils';
import { outputMessage } from './constant.js';

class App {
  async run() {
    Console.print(outputMessage.startMessage);
    const userInput = await Console.readLineAsync('');
    console.log(this.isStartWithNumber(userInput));
  }

  isStartWithNumber(input) {
    const regExp = /^[1-9]/;
    return regExp.test(input);
  }
}

export default App;
