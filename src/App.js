import Calculator from './controller/Calculator.js';
import User from './user/User.js';

class App {
  constructor() {
    const user = new User();
    this.calculator = new Calculator(user);
  }
  async run() {
    await this.calculator.start();
  }
}

export default App;
