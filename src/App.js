import InputHandler from './InputHandler.js';
import Validators from './utils/validators.js';

class App {
  async run() {
    try {
      const input = await InputHandler.getInput();
      Validators.validateInput(input);
      console.log('유효한 입력값:', input);
    } catch (error) {
      console.error('[ERROR]', error.message);
    }
  }
}

export default App;
