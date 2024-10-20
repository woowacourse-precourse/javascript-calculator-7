import { strPrint } from './utils/index.js';
import { createStr } from './utils/index.js';

class App {
  async run() {
    const calculator = await createStr();
    const sum = calculator.calculate();
    strPrint(sum);
  }
}


export default App;
