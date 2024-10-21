import { getInput } from './utils/IOUtils.js';

class App {
  async run() {
    try {
      const input = await getInput();
    } catch (err) {
      throw err;
    }
  }
}

export default App;
