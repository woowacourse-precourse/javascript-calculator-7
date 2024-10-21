import { readUserInput } from './utils/readUserInput.js';
import { parseCalculatorInput } from './utils/parseCalculatorInput.js';
import { tokenizer } from './utils/tokenizer.js';
import { validators } from './utils/validators.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  #delimiters;

  constructor(delimiters = [',', ':']) {
    this.#delimiters = delimiters;
  }

  async run() {
    try {
      const input = await readUserInput('덧셈할 문자열을 입력해 주세요.');
      const [customDelimiter, values] = parseCalculatorInput(input);

      const tokens = tokenizer(
        values,
        [customDelimiter, ...this.#delimiters],
        [validators.isNumber, validators.isPositiveNumber]
      );

      const result = tokens.reduce((total, value) => {
        if (validators.isNumber(value)) {
          total += BigInt(value);
        }
        return total;
      }, BigInt(0));

      Console.print(`결과 : ${result}`);
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
