import { MissionUtils } from "@woowacourse/mission-utils";
import getString from './utils/getString';
import getSum from './utils/getSum';
import parseIntArray from './utils/parseIntArray';
import splitBySymbol from './utils/splitBySymbol';

class App {
  async run() {
    const inputValue = await getString();
    const seperatedValue = splitBySymbol(inputValue);
    const intArray = parseIntArray(seperatedValue);
    const result = getSum(intArray);
  
    MissionUtils.Console.print(`결과 : ${result}`);
  }
}

export default App;
