import UserInput from '../View/UserInput.js';

let loopCount = 0;
let tureCountForNumber = 0;
let tureCountForSeparator = 0;

const notCustomLetterCase = userInput => {
  for (let i = 0; i < userInput.length; i++) {
    if (i % 2 === 0 && !isNaN(userInput[i]) === true) {
      // 숫자 확인
      tureCountForNumber += 1;
    }
    if (i % 2 === 1 && (userInput[i] === ':' || userInput[i] === ',')) {
      // 구분자 확인
      tureCountForSeparator += 1;
    }
    loopCount += 1;
  }
  if (loopCount === tureCountForNumber + tureCountForSeparator) {
    console.log('입력 값의 오류가 없습니다.'); // 나중에 삭제
  }
};

export default notCustomLetterCase;
