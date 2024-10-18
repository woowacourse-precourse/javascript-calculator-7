export class Validate {
  checkLength(result) {
    if (result.length > 10000) return false;
    else return true;
  }
  // 숫자 아닌 값 확인
  checkNotNum(result) {
    for (let index = 0; index < result.length; index++) {
      if (Number.isNaN(result[index])) return true;
    }
    return false;
  }
  // 음수 확인
  checkMin(result) {
    for (let index = 0; index < result.length; index++) {
      if (result[index] < 0) return true;
    }
    return false;
  }
  checkEmpty = (result) => {
    if (result == "") return true;
  };

  checkNone = (result) => {
    for (let index = 0; index < result.length; index++) {
      if (result[index] == "") return true;
    }
    return false;
  };
  checkSpace = (result) => {
    let regexSpace = /\s/;
    for (let index = 0; index < result.length; index++) {
      if (regexSpace.test(result[index])) return true;
    }
    return false;
  };
  checkCustomNumber = (result) => {
    let customInput = result.match(/^\/\/(.)\\n/); // ; 추출
    if (!customInput) return false; // 커스텀 구분자가 없으면 false 반환
    // isNaN : 숫자가 아니면 true 커스텀 구분자가 숫자인지 확인
    if (!isNaN(customInput[1])) return true;
    return false;
  };
}
