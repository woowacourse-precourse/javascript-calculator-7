import User from './User.js';
import CustomDelimiterHandler from './handleCustomDelimiter.js';

class App {
  async run() {
    await new User(new CustomDelimiterHandler()).readNumber();
  }
}

export default App;
