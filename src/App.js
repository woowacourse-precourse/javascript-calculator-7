import {
  sumByDefaultSeparator,
  sumByCustomSeparator,
} from './utils/calculator.js';
import { validation } from './utils/validate.js';
import { getInput } from './utils/getInput.js';
import { findCustomSeparator } from './utils/separator.js';

class App {
  async run() {
    const receivedInput = await getInput();

    validation(receivedInput);

    let result = 0;
    if (findCustomSeparator(receivedInput)) {
      result = sumByCustomSeparator(receivedInput);
    } else {
      result = sumByDefaultSeparator(receivedInput);
    }
  }
}

export default App;
