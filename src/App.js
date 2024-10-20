import User from './User.js';

class App {
  async run() {
    await new User().readNumber();
  }
}

export default App;
