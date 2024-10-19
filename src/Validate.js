export class Validate {
  basicValidate(input) {
    if (this.checkEmpty(input)) return 0;
    // 커스텀 구분자 숫자인지 확인
    else if (this.checkCustomError(input)) return { error: true };
    else return { error: false };
  }

  deepValidate(result) {
    // result type :  array<string>
    console.log("0");

    if (this.checkNone(result)) return { error: true }; // "" 빈문자열 체크
    console.log("1");
    if (this.checkNotNum(result)) return { error: true }; // "" 숫자인지 체크
    console.log("2");

    if (this.checkSpace(result)) return { error: true }; // 공백 체크
    console.log("3");

    if (this.checkMin(result)) return { error: true }; // 음수 체크
    console.log("4");

    return { error: false, numbers: result };
  }

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
      if (result[index] === "") return true;
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
  checkCustomError = (result) => {
    let customInput = result.match(/^\/\/(.)\\n/); // ; 추출
    // isNaN : 숫자가 아니면 true 커스텀 구분자가 숫자인지 확인
    if (!customInput) return false;
    if (!isNaN(customInput[1])) return true; // 숫자면 에러 반환
    return false;
  };
}
