// @ts-check

import AddCalculator from './controller/AddCalculator.js';
import User from './user/User.js';

class App {
  constructor() {
    const user = new User();
    this.calculator = new AddCalculator(user);
  }

  /**@returns {Promise<void>} */
  async run() {
    await this.calculator.start();
  }
}

export default App;
