import { Console } from '@woowacourse/mission-utils';
import UserInput from './View/UserInput.js';
import notCustomeLetterCase from './Model/notCustomLetterCase.js';

class App {
  async run() {
    const input = await UserInput();
    notCustomeLetterCase(input);
  }
}

export default App;
