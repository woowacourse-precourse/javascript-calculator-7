import { Console } from '@woowacourse/mission-utils';
import Input from './Input.js';
import { OUTPUT_MESSSAGE } from './constants/message.js';

class App {
  async run() {
    try {
      const inputHandler = new Input();
      const input = await inputHandler.getInput();
      Console.print(`${OUTPUT_MESSSAGE} ${input}`);
    } catch (err) {
      Console.print(err.message);
      throw err;
    }
  }
}

export default App;