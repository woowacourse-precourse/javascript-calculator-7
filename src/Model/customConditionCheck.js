import { Console } from '@woowacourse/mission-utils';
import UserInput from '../View/UserInput.js';

// 디버깅 필요 화살표로 통일

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
  // Console.print('userInput: ' + userInput);
  let positiveNumberCheckCount = 0;
  const numberCount = (userInput.length - 5) / 2 + 1;
  const numberCountForInt = parseInt(numberCount);
  for (let i = 5; i < userInput.length; i += 1) {
    if (i % 2 === 1 && Number(userInput[i]) > 0) {
      positiveNumberCheckCount += 1;
    }
  }
  // Console.print('[***] positiveNumberCheckCount: ' + positiveNumberCheckCount);
  // Console.print('[***] numberCountForInt: ' + numberCountForInt);

  if (positiveNumberCheckCount === numberCountForInt) {
    return true;
  }
  return false;
}

const customConditionCheck = userInput => {
  // Console.print('[디버깅] conditionTextInputCheck(userInput)' + conditionTextInputCheck(userInput));
  // Console.print('[디버깅] separatorTextInputCheck(userInput)' + separatorTextInputCheck(userInput));
  // Console.print('[디버깅] positiveNumberCheck(userInput)' + positiveNumberCheck(userInput));

  if (conditionTextInputCheck(userInput) && separatorTextInputCheck(userInput) && positiveNumberCheck(userInput)) {
    return true;
  }
  return false;
};

export default customConditionCheck;

// console.log('UserInput[0]', UserInput[0]);
// console.log('UserInput[1]', UserInput[1]);
// console.log('UserInput[2]', UserInput[2]);
// console.log('UserInput[3]', UserInput[3]);
// console.log('UserInput[4]', UserInput[4]);
// console.log('UserInput[5]', UserInput[5]);
// console.log('UserInput[6]', UserInput[6]);
// console.log('UserInput[7]', UserInput[7]);
// console.log('UserInput[8]', UserInput[8]);
// console.log('UserInput[9]', UserInput[9]);
// console.log('UserInput[10]', UserInput[10]);
// console.log('UserInput[11]', UserInput[11]);
// console.log('UserInput[12]', UserInput[12]);
// console.log('UserInput[13]', UserInput[13]);
// console.log('UserInput[14]', UserInput[14]);
// console.log('UserInput[15]', UserInput[15]);
// console.log('UserInput[16]', UserInput[16]);
