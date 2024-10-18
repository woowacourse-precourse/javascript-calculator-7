import { getInput } from './utils/getInput.js';

class App {
  async run() {
    const receivedInput = await getInput();
  }
}

export default App;
