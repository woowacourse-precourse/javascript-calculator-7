import { errorConstans } from "../constants/index.js";

export default class StrCalcuLator {
  #inputStrs;
  #separator;

  constructor(inputStr) {
    this.#inputStrs = this.#createStr(inputStr); // 커스텀 구분자 검증과 문자열 생성.
    this.#inputStrs = this.#separate(this.#separator, this.#inputStrs); // 구분자로 분류후 배열로 생성.
    this.#isNumber(this.#inputStrs); // 분리된 문자열에서 조건에 맞는지 검증
  }

  // 오류 검증 및 필요한 문자열로 변환하는 메서드
  #createStr(inputStr) {
    const separator = [":", ","];
    let customBoolean = false;
    // 커스텀 구분자를 가지는지 확인.
    customBoolean = this.#isCustom(inputStr);
    
    if (customBoolean) { // 커스텀 구분자를 가졌을 때,
      const tmpSep = inputStr.slice(2, 3); // 커스텀 구분자
      inputStr = inputStr.slice(5,); // 커스텀 구분자를 제외한 문자열
      separator.push(tmpSep);
    }
    this.#separator = separator;   
    return inputStr;
  }

  #separate(separatorArr, strs) {
    separatorArr.forEach((sep) => {
      strs = strs.split(sep).join('');
    })
    strs = strs.split('').map((el) => +el);
    return strs;
  }

  calculate() {
    const sum = this.#inputStrs.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    // 구분자를 이용해 문자열 구분.
    return sum;
  }
  
  // 입력문에서의 에러 상황 체크
  // 1. 커스텀 구분자를 가지는지.
  #isCustom = (inputStr) => {
    const regExp = /(\/\/.{1}\\n){1}.{0,}/; 
    const regExp2 = /(\/\/\D{1}\\n){1}.{0,}/;
    if (regExp.test(inputStr)) { // 커스텀 구분자의 형식을 가진 문자열 이라면,
      if (!regExp2.test(inputStr)) {
        throw new Error(`${errorConstans.WRONG_CUSTOM_SEPERATOR}`);
      }
      return true;
    }
    return false;
  }

  // 2. 문자열이 숫자인지, 양수인지
  #isNumber = (inputStr) => {
    for (let i = 0; i < inputStr.length; i += 1){
      if (isNaN(inputStr[i])) throw new Error(`${errorConstans.WROND_STR}`);
    }
  }
}