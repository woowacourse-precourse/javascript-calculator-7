import { MissionUtils } from '@woowacourse/mission-utils';
import ParseStr from './Utils/ParseStr.js';

class App {
  async run() {
    const PARSE_STR = await MissionUtils.Console.readLineAsync('');
    const RESULT = ParseStr(PARSE_STR);
    await MissionUtils.Console.print(RESULT);
  }
}

export default App;
