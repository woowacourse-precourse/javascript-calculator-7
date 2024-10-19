import UserInput from './View/UserInput.js';
import notCustomConditionCheck from './Model/notCustomConditionCheck.js';
import numberSum from './Model/numberSum.js';
import customConditionCheck from './Model/customConditionCheck.js';
import exportUserOutput from './View/exportUserOutput.js';

class App {
  async run() {
    // TO DO: refector UserInput -> getUsrInput(동적으로)
    const input = await UserInput();
    // TO DO: refector 함수 이름 변경하기
    if (notCustomConditionCheck(input) === true || customConditionCheck(input) === true) {
      const output = numberSum(input);
      exportUserOutput(output);
    } else {
      throw new Error('[ERROR] 잘못된 입력입니다.');
    }
  }
}

export default App;
