import { MissionUtils, Console } from "@woowacourse/mission-utils";
import { errorConstans, uiConstants } from './constants/index.js';
import { strPrint } from './utils/index.js';
import { StrCalcuLator } from "./components/index.js";
import { createStr } from './utils/index.js';

class App {
  async run() {
    const calculator = await createStr();
    const sum = calculator.calculate();
    strPrint(sum);
  }
}


export default App;
