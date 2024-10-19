// 1. //+구분자+\n 입력 체크
const isConditionTextInputCheck = userInput => {
  if (userInput[0] === '/' && userInput[1] === '/' && userInput[3] === '\\' && userInput[4] === 'n') {
    return true;
  }
  return false;
};

// 2. 구분자 사용 입력 체크
const isSeparatorTextInputCheck = userInput => {
  let allSpeparatorTrueCheck = 0;
  let loofCountForallSpeparatorTrueCheck = 0;
  for (let i = 6; i < userInput.length; i += 1) {
    if (i % 2 === 0) {
      loofCountForallSpeparatorTrueCheck += 1;
    }
    if (userInput[2] === userInput[i]) {
      allSpeparatorTrueCheck += 1;
    }
  }
  if (allSpeparatorTrueCheck === loofCountForallSpeparatorTrueCheck) {
    return true;
  }
};

// 3. 숫자가 양수로 이루어진지 체크하기
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
  if (isConditionTextInputCheck(userInput) && isSeparatorTextInputCheck(userInput) && isPositiveNumberCheck(userInput)) {
    return true;
  }
  return false;
};

export default isCustomConditionCheck;
