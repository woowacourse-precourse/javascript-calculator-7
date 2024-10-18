import Validator from './utils/Validator.js';
import IOManager from './utils/IOManager.js';
import Analysis from './Analysis.js';
import ArrayUtil from './utils/ArrayUtil.js';

class App {
  #str = '';

  async run() {
    this.#str = await IOManager.input();

    const analysis = new Analysis([',', ':']);
    const { newSeperators, seperatedArr } = analysis.getInfo(this.#str);

    Validator.customSeperator(newSeperators);
    Validator.beforeCalculate(seperatedArr);

    const answer = ArrayUtil.sum(seperatedArr);
    IOManager.output(answer);
  }
}

export default App;
