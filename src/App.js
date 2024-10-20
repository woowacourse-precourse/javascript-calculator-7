import getUserInput from './View/getUserInput.js';
import isInputEmpty from './Controller/isInputEmpty.js';
import printErrorMessageForInputEmpty from './View/printErrorMessageForInputEmpty.js';
import isCommaSemicolonConditionCheck from './Controller/isCommaSemicolonConditionCheck.js';
import isCustomConditionCheck from './Controller/isCustomConditionCheck.js';
import addNumbers from './Model/addNumbers.js';
import printUserOutput from './View/printUserOutput.js';
import printErrorMessageForTypo from './View/printErrorMessageForTypo.js';

class App {
  async run() {
    const input = await getUserInput();
    if (isInputEmpty(input) === true) {
      printErrorMessageForInputEmpty();
    }
    if (isCommaSemicolonConditionCheck(input) === true || isCustomConditionCheck(input) === true) {
      const output = addNumbers(input);
      printUserOutput(output);
    }
    if (!(isCommaSemicolonConditionCheck(input) === true || isCustomConditionCheck(input) === true)) {
      printErrorMessageForTypo();
    }
  }
}

export default App;
