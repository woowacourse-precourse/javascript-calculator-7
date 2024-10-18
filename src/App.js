import getUserInput from './inputHandler.js';
import parseInput from './delimiterHandler.js';
import sumCalculation from './calculator.js';
import { validateEmptyString, validateNumbers } from './validator.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    const userInput = await getUserInput();

    if (userInput === '') {
      const result = validateEmptyString(userInput);
      return MissionUtils.Console.print(`결과 : ${result}`);
    }

    const rawValues = parseInput(userInput);
    const numbers = validateNumbers(rawValues);
    const result = sumCalculation(numbers);
    return MissionUtils.Console.print(`결과 : ${result}`);
  }
}

export default App;
