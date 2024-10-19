import getUserInput from './View/getUserInput.js';
import isCommaSemicolonConditionCheck from './Model/isCommaSemicolonConditionCheck.js';
import addedNumbers from './Model/addedNumbers.js';
import isCustomConditionCheck from './Model/isCustomConditionCheck.js';
import exportUserOutput from './View/exportUserOutput.js';

class App {
  async run() {
    const input = await getUserInput();
    if (isCommaSemicolonConditionCheck(input) === true || isCustomConditionCheck(input) === true) {
      const output = addedNumbers(input);
      exportUserOutput(output);
    } else {
      throw new Error('[ERROR] 잘못된 입력입니다. 프로그램을 종료하겠습니다.');
    }
  }
}

export default App;
