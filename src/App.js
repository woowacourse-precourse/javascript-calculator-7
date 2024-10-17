import { Console } from '@woowacourse/mission-utils';
import Input from './Input.js';

class App {
  constructor() {
    this.input = new Input();
  }

  async run() {
    await this.input.getUserNumber();
  }
}

const app = new App();
app.run();

export default App;
