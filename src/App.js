import { Console } from '@woowacourse/mission-utils';
import { validateLine, validateCustomPart, validateLinePart } from './utils/stringValidator.js';
import {
  checkIsDefaultString,
  sumString as sumLine,
  divideCustom,
  getFinalSeparators,
} from './utils/stringParser.js';

class App {
  async run() {
    const line = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');
    validateLine(line);
    
    if (checkIsDefaultString(line)) return Console.print(`결과 : ${sumLine(line)}`);

    const [customPart, linePart] = divideCustom(line);
    validateCustomPart(customPart);

    const separators = getFinalSeparators(customPart);
    Console.print(separators);
    validateLinePart(linePart, separators);

    return Console.print(`결과 : ${sumLine(linePart, separators)}`);
  }
}

export default App;
