import { Console } from '@woowacourse/mission-utils';
import { StringStorage } from './StringStorage/StringStorage.js';
import { separateString } from './util/separateString.js';
import { UserInput } from './UserInput/UserInput.js';
import { readInput } from './util/readInput.js';
import { Pattern } from './Pattern/Pattern.js';
import { Calculator } from './Calculator/Calculator.js';
import { RESULT_MESSAGE, START_MESSAGE } from './constant/index.js';

class App {
  async run() {
    const userInput = new UserInput(await readInput(START_MESSAGE));
    const storage = new StringStorage(...userInput.getSplitInput());
    const pattern = new Pattern(storage.separator);
    const calculator = new Calculator(
      separateString(new RegExp(pattern.makeOrPattern()), storage.string).map(
        Number,
      ),
    );
    Console.print(`${RESULT_MESSAGE}${calculator.add()}`);
  }
}

export default App;
