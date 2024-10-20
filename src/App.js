import { errorMessages } from './constant.js';
import { inputService } from './lib/IOService.js';

class App {
  async run() {
    try {
      inputService();
    } catch (e) {
      return new Error(`[ERROR]: errorMessages.unexpectedError`);
    }
  }
}

export default App;
