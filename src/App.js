import UserInput from './View/UserInput.js';
import notCustomConditionCheck from './Model/notCustomConditionCheck.js';
import numberSum from './Model/numberSum.js';
import customConditionCheck from './Model/customConditionCheck.js';

class App {
  async run() {
    const input = await UserInput();
    if (notCustomConditionCheck(input) === true || customConditionCheck(input) === true) {
      numberSum(input);
    } else {
      throw new Error('[ERROR] 잘못된 입력입니다.');
    }
  }
}

export default App;
