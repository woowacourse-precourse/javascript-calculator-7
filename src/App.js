import { MissionUtils, Console } from "@woowacourse/mission-utils";
import { errorConstans, uiConstants } from './constants/index.js';
import { strPrint } from './utils/index.js';
import { StrCalcuLator } from "./components/index.js";
import { createStr } from './utils/index.js';

class App {
  async run() {
    const calculator = createStr();
    // const tmp = str.calculate();
    // const input = await getInputStr();
    // const answer = `${uiConstants.RESULT} : ${input}`;
    // strPrint(answer);
  }
}


export default App;
