import UserInput from '../View/UserInput.js';

let loopCount = 0;
let tureCountForNumber = 0;
let tureCountForSeparator = 0;

// TODO: 리팩토링
const notCustomConditionCheck = userInput => {
  for (let i = 0; i < userInput.length; i += 1) {
    if ((i % 2 === 0 && !isNaN(userInput[i]) && userInput[i] > 0) === true) {
      tureCountForNumber += 1;
    }
    if (i % 2 === 1 && (userInput[i] === ':' || userInput[i] === ',')) {
      tureCountForSeparator += 1;
    }
    loopCount += 1;
  }
  if (loopCount === tureCountForNumber + tureCountForSeparator) {
    return true;
  }
};

export default notCustomConditionCheck;
