import { Console } from '@woowacourse/mission-utils';
import UserInput from './View/UserInput.js';
import notCustomConditionCheck from './Model/notCustomConditionCheck.js';

class App {
  async run() {
    const input = await UserInput();
    notCustomConditionCheck(input);
  }
}

export default App;
