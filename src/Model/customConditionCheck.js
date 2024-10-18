import { Console } from '@woowacourse/mission-utils';
import UserInput from '../View/UserInput.js';

// TO DO: 리펙토링 디버깅 필요 화살표로 통일

// 1. //+구분자+\n 입력 체크
function conditionTextInputCheck(userInput) {
  if (userInput[0] === '/' && userInput[1] === '/' && userInput[3] === '\\' && userInput[4] === 'n') {
    return true;
  }
  return false;
}

// 2. 구분자 사용 입력 체크
function separatorTextInputCheck(userInput) {
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
  return false;
}

// 3. 숫자가 양수로 이루어진지 체크하기
function positiveNumberCheck(userInput) {
  let positiveNumberCheckCount = 0;
  const numberCount = (userInput.length - 5) / 2 + 1;
  const numberCountForInt = parseInt(numberCount);
  for (let i = 5; i < userInput.length; i += 1) {
    if (i % 2 === 1 && Number(userInput[i]) > 0) {
      positiveNumberCheckCount += 1;
    }
  }

  if (positiveNumberCheckCount === numberCountForInt) {
    return true;
  }
  return false;
}

const customConditionCheck = userInput => {
  if (conditionTextInputCheck(userInput) && separatorTextInputCheck(userInput) && positiveNumberCheck(userInput)) {
    return true;
  }
  return false;
};

export default customConditionCheck;
