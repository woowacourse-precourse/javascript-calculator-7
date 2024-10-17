import { Console } from '@woowacourse/mission-utils';
import { checkLine, checkCustomPart, checkLinePart } from './utils/check.js';
import {
  checkIsNormal,
  sumString,
  divideCustom,
  addCustomSeparator,
} from './utils/main.js';
import { DEFAULT_SEPARATORS } from './constants.js';

const c = Console.print;

class App {
  async run() {
    const separators = [...DEFAULT_SEPARATORS];

    const line = await Console.readLineAsync('');
    checkLine(line);
    
    if (checkIsNormal(line)) return Console.print(`결과 : ${sumString(linePart, separators)}`);

    const [customPart, linePart] = divideCustom(line);
    checkCustomPart(customPart);

    addCustomSeparator(separators, customPart)
    checkLinePart(linePart, separators);

    return Console.print(`결과 : ${sumString(linePart, separators)}`);
  }
}

export default App;
