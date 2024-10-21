import { MissionUtils } from "@woowacourse/mission-utils";

const START_CUSTOM_SEPERATOR_SETTING = '//';
const END_CUSTOM_SEPERATOR_SETTING = '\\n';

class App {
  async run() {
    // 결과값 변수
    let result = 0;
    // 구분자 설정 - 기본 구분자 쉼표(,), 콜론(:)
    let seperators = ',:';


    // 사용자 입력값을 받는다.
    const input = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

    // 커스텀 구분자 추출
    const customSeperators = getCustomSeperators(input);

    let str = input;    
    if(customSeperators.length > 0) {
      seperators += customSeperators;
      // 커스텀 구분자 설정을 제외한 문자열 추출
      str = input.substring(input.indexOf(END_CUSTOM_SEPERATOR_SETTING)+2);
    }

    // 숫자와 구분자를 제외한 다른 형식의 문자가 포함되어 있는지 확인
    isOnlyNumberAndSeperators(str, seperators);

    // 구분자만 구성된 정규식 생성
    const arr = getOnlyNumberArr(str, seperators);

    // 숫자배열의 숫자 총 합 계산
    result = getSumAllNumber(arr);

     // 결과 출력
     MissionUtils.Console.print(`결과 : ${result}`);
  }
}

function getCustomSeperators(input) {
  let customSeperator = '';
  if(input.startsWith(START_CUSTOM_SEPERATOR_SETTING)) {
    if(input.includes(END_CUSTOM_SEPERATOR_SETTING)){
      // 구분자 추출
      customSeperator = input.slice(2, input.indexOf(END_CUSTOM_SEPERATOR_SETTING));

      // 숫자 혹은 문자열인지 확인
      if(customSeperator.match(/^[0-9]$/) || customSeperator.length > 1) {
        throw new Error(getErrorMessage("커스텀 구분자의 형식이 잘못되었습니다."));
      }
    }
  }

  return customSeperator;
}

function isOnlyNumberAndSeperators(str, seperators) {
  const allRegExp = new RegExp(`[${seperators}\\d]`)
  if(!str.match(allRegExp)) {
    throw new Error(getErrorMessage("숫자와 구분자가 아닌 다른 문자가 포함되어 있습니다."));
  } 
}

function getOnlyNumberArr(str, seperators) {
  // 구분자만 구성된 정규식 생성
  const sepRegExp = new RegExp(`[${seperators}]`);
  return str.split(sepRegExp);
}

function getSumAllNumber(arr) {
  // 숫자배열의 숫자 총 합 계산
  return arr.map(Number).reduce((a,b) => a+b);
}

function getErrorMessage(message) {
  return '[Error] ' + message;
}
export default App;