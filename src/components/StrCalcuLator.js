import { Console } from "@woowacourse/mission-utils";
import { uiConstants, errorConstans } from "../constants/index.js";

export default class StrCalcuLator {
  #inputStrs;

  constructor(inputStr) {
    this.#inputStrs = inputStr;
    console.log(this.#inputStrs);
  }

  async #getStr() {
    let inputStrs = await inputStr();
  }
  #createStr() {
    const separator = [":", ","];
    let customBoolean = false;
    // 커스텀 구분자를 가지는지 확인.
    customBoolean = this.#isCustom(inputStrs);
    
    if (customBoolean) { // 커스텀 구분자를 가졌을 때,
      const tmpSep = inputStrs.slice(2, 3); // 커스텀 구분자
      inputStrs = inputStrs.slice(5,); // 커스텀 구분자를 제외한 문자열
      separator.push(tmpSep);
    }
    // 구분자를 이용한 분리
    separator.forEach((sep) => {
      inputStrs = inputStrs.split(sep).join('');
    })
    inputStrs = inputStrs.split('').map((el) => +el);
    
    // 분리된 문자열에서 조건에 맞는지 검증
    this.#isNumber(inputStrs);
    
    return inputStrs;
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