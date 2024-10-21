import { Console } from '@woowacourse/mission-utils';
import { validateLine, validateCustomPart, validateLinePart } from './utils/stringValidator.js';
import {
  checkIsDefaultString,
  sumString,
  divideCustom,
  getFinalSeparators,
} from './utils/stringParser.js';

class App {
  calculate(line) {
    validateLine(line);
    
    if (checkIsDefaultString(line)) return sumString(line);

    const [customPart, linePart] = divideCustom(line);
    validateCustomPart(customPart);

    const separators = getFinalSeparators(customPart);
    Console.print(separators);
    validateLinePart(linePart, separators);

    return sumString(linePart, separators);
  }

  async run() {
    const line = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');
    const result = this.calculate(line);
    Console.print(`결과 : ${result}`);
  }
}

export default App;
