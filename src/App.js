import { getInput } from './utils/IOUtils.js';
import { getNumbers } from './utils/preprocessUtils.js';
import { add } from './utils/calculator.js';

class App {
  async run() {
    try {
      const input = await getInput();
      const numbers = getNumbers(input);
      const result = add(numbers);

    } catch (err) {
      throw err;
    }
  }
}

export default App;
