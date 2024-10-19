import { validation } from './utils/validate.js';
import { getInput } from './utils/getInput.js';

class App {
  async run() {
    const receivedInput = await getInput();

    validation(receivedInput);
  }
}

export default App;
