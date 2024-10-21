import { getInput } from './utils/IOUtils.js';
import { getNumbers } from './utils/preprocessUtils.js';

class App {
  async run() {
    try {
      const input = await getInput();
      const numbers = getNumbers(input);

    } catch (err) {
      throw err;
    }
  }
}

export default App;
