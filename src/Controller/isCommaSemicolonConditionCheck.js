let loopCount = 0;
let trueCountForNumberInUserInput = 0;
let trueCountForSeparatorInUserInput = 0;

// TODO: 리팩토링
const isCommaSemicolonConditionCheck = userInput => {
  for (let i = 0; i < userInput.length; i += 1) {
    if (i % 2 === 0 && !Number.isNaN(userInput[i]) && userInput[i] > 0) {
      trueCountForNumberInUserInput += 1;
    }
    if (i % 2 === 1 && (userInput[i] === ':' || userInput[i] === ',')) {
      trueCountForSeparatorInUserInput += 1;
    }
    loopCount += 1;
  }
  if (loopCount === trueCountForNumberInUserInput + trueCountForSeparatorInUserInput) {
    return true;
  }
  return false;
};

export default isCommaSemicolonConditionCheck;
