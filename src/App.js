import Validator from './Validator.js';
import IOManager from './IOManager.js';
import Analysis from './Analysis.js';

class App {
  #str = '';

  async run() {
    this.#str = await IOManager.input();

    const analysis = new Analysis([',', ':']);
    const { newSeperators, seperatedArr } = analysis.getInfo(this.#str);

    Validator.customSeperator(newSeperators);
    Validator.parseNumber(seperatedArr);

    const answer = seperatedArr.reduce((prev, cur) => prev + Number(cur), 0);
    IOManager.output(answer);
  }
}

export default App;
