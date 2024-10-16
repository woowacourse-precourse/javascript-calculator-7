import { Console } from '@woowacourse/mission-utils';
import { outputMessage } from './constant.js';

class App {
  async run() {
    Console.print(outputMessage.startMessage);
    const userInput = await Console.readLineAsync('');
  }
}

export default App;
