const isSeparatorTextCheck = userInput => {
  if (userInput[0] === '/' && userInput[1] === '/' && userInput[3] === '\\' && userInput[4] === 'n') {
    return true;
  }
  return false;
};

const countMatchingAndEvenIndexChecks = userInput => {
  let allSeparatorTrueCheck = 0;
  let loopCountForAllSeparatorTrueCheck = 0;
  for (let i = 6; i < userInput.length; i += 1) {
    if (i % 2 === 0) {
      loopCountForAllSeparatorTrueCheck += 1;
    }
    if (userInput[2] === userInput[i]) {
      allSeparatorTrueCheck += 1;
    }
  }
  return [allSeparatorTrueCheck, loopCountForAllSeparatorTrueCheck];
};

const isSeparatorTextInputAndLoopCountEqual = countForSeparatorTextAndLoop => {
  if (countForSeparatorTextAndLoop[0] === countForSeparatorTextAndLoop[1]) {
    return true;
  }
  return false;
};

const isSeparatorTextInputCountCheck = userInput => {
  if (isSeparatorTextInputAndLoopCountEqual(countMatchingAndEvenIndexChecks(userInput))) {
    return true;
  }
  return false;
};

const isPositiveNumberCheck = userInput => {
  let positiveNumberCheckCount = 0;
  const NUMBER_COUNT = (userInput.length - 5) / 2 + 1;
  const NUMBER_COUNT_FOR_INT = parseInt(NUMBER_COUNT, 10);
  for (let i = 5; i < userInput.length; i += 1) {
    if (i % 2 === 1 && Number(userInput[i]) > 0) {
      positiveNumberCheckCount += 1;
    }
  }
  if (positiveNumberCheckCount === NUMBER_COUNT_FOR_INT) {
    return true;
  }
  return false;
};

const isCustomConditionCheck = userInput => {
  if (isSeparatorTextCheck(userInput) && isSeparatorTextInputCountCheck(userInput) && isPositiveNumberCheck(userInput)) {
    return true;
  }
  return false;
};

export default isCustomConditionCheck;
