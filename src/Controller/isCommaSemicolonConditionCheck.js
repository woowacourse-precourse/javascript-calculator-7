let loopCount = 0;
let tureCountForNumberInUserInput = 0;
let tureCountForSeparatorInUserInput = 0;

// TODO: 리팩토링
const isCommaSemicolonConditionCheck = userInput => {
  for (let i = 0; i < userInput.length; i += 1) {
    if (i % 2 === 0 && !Number.isNaN(userInput[i]) && userInput[i] > 0) {
      tureCountForNumberInUserInput += 1;
    }
    if (i % 2 === 1 && (userInput[i] === ':' || userInput[i] === ',')) {
      tureCountForSeparatorInUserInput += 1;
    }
    loopCount += 1;
  }
  if (loopCount === tureCountForNumberInUserInput + tureCountForSeparatorInUserInput) {
    return true;
  }
  return false;
};

export default isCommaSemicolonConditionCheck;
