import { validation } from './utils/validate.js';
import { getInput } from './utils/getInput.js';
import { findCustomSeparator } from './utils/separator.js';

class App {
  async run() {
    const receivedInput = await getInput();

    validation(receivedInput);

    if (findCustomSeparator(receivedInput)) {
    } else {
    }
  }
}

export default App;
