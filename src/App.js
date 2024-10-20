import getUserInput from './View/getUserInput.js';
import isNoInputCheck from './Controller/isNoInputCheck.js';
import exportErrorMessageForNoInput from './View/exportErrorMessageForNoinput.js';
import isCommaSemicolonConditionCheck from './Controller/isCommaSemicolonConditionCheck.js';
import isCustomConditionCheck from './Controller/isCustomConditionCheck.js';
import addedNumbers from './Model/addedNumbers.js';
import exportUserOutput from './View/exportUserOutput.js';
import exportErrorMessage from './View/exportErrorMessageForTypo.js';

class App {
  async run() {
    const input = await getUserInput();
    if (isNoInputCheck(input) === true) {
      exportErrorMessageForNoInput();
    }
    if (isCommaSemicolonConditionCheck(input) === true || isCustomConditionCheck(input) === true) {
      const output = addedNumbers(input);
      exportUserOutput(output);
    } else {
      exportErrorMessage();
    }
  }
}

export default App;
