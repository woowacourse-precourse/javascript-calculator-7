import { Console } from '@woowacourse/mission-utils';
import { validateDefaultLine, validateCustomPart, validateTargetStringPart } from './utils/stringValidator.js';
import {
  checkIsDefaultString,
  sumString,
  divideCustom,
  getFinalSeparators,
} from './utils/stringParser.js';

class App {
  calculate(line) {    
    if (checkIsDefaultString(line)) {
      validateDefaultLine(line);

      return sumString(line)
    };

    const [customPart, targetStringPart] = divideCustom(line);
    const separators = getFinalSeparators(customPart);
    validateCustomPart(customPart);
    validateTargetStringPart(targetStringPart, separators);

    return sumString(targetStringPart, separators);
  }

  async run() {
    const line = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');
    const result = this.calculate(line);
    Console.print(`결과 : ${result}`);
  }
}

export default App;
