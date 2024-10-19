import getUserInput from './View/getUserInput.js';
import notCustomConditionCheck from './Model/notCustomConditionCheck.js';
import addedNumbers from './Model/addedNumbers.js';
import customConditionCheck from './Model/customConditionCheck.js';
import exportUserOutput from './View/exportUserOutput.js';

class App {
  async run() {
    const input = await getUserInput();
    // TO DO: refector 함수 이름 변경하기
    if (notCustomConditionCheck(input) === true || customConditionCheck(input) === true) {
      const output = addedNumbers(input);
      exportUserOutput(output);
    } else {
      throw new Error('[ERROR] 잘못된 입력입니다.');
    }
  }
}

export default App;
