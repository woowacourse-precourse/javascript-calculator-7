import { Console } from '@woowacourse/mission-utils';

import UserInput from '../View/UserInput.js';

// 디버깅 필요
// 1. //+구분자+\n 입력 체크
function conditionTextInputCheck() {
  if (UserInput[0] === '/' && UserInput[1] === '/' && UserInput[3] === '\\' && UserInput[4] === 'n') {
    return true;
  }
}

// 2. 구분자 사용 입력 체크
function separatorTextInputCheck() {
  let allSpeparatorTrueCheck = 0;
  let loofCountForallSpeparatorTrueCheck = 0;
  for (let i = 6; i < UserInput.length; i += 1) {
    // 짝수
    if (i % 2 === 0) {
      loofCountForallSpeparatorTrueCheck += 1;
    }
    if (UserInput[2] === UserInput[i]) {
      allSpeparatorTrueCheck += 1;
    }
  }
  if (allSpeparatorTrueCheck === loofCountForallSpeparatorTrueCheck) {
    return true;
  }
  return false;
}

const CustomConditionCheck = UserInput => {
  Console.print('[디버깅]확인');
  conditionTextInputCheck();
  Console.print('[디버깅]conditionTextInputCheck(): ' + conditionTextInputCheck());
  separatorTextInputCheck();
  Console.print('[디버깅]separatorTextInputCheck(): ' + separatorTextInputCheck());
  if (conditionTextInputCheck() && separatorTextInputCheck()) {
    return true;
  }
  return false;
};
// // [디버깅용]
CustomConditionCheck();
Console.print('[디버깅]CustomConditionCheck(): ' + CustomConditionCheck());

export default CustomConditionCheck;

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
