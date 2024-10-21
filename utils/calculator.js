import { printErrorMsg } from './inout.js'; 
  
  // 숫자를 추출한 배열을 더하는 메서드
  function SumNumbers(str) {
    const onlyNumbersRegex = /\d+/g; // 숫자를 추출하는 정규표현식
    const numbers = str.match(onlyNumbersRegex); // 숫자만 추출하여 배열에 담는다
   
    if (!numbers) return 0; // 숫자가 없을 경우 0 반환
  
    const sum = numbers.reduce((acc, num) => acc + parseInt(num), 0);
    
    return sum;
  }
  
  function checkCustomString(str){
    const endSplit = str.indexOf('\\n');
    const splitString = str.charAt(endSplit-1); // 커스텀 구분자
    
    //console.log("구분자 : "+splitString);
  
    const afterString = str.substring(endSplit+2); // 구분자 이후의 문자
    
    //console.log("처리할 문자열 : "+afterString);
  
    const validStringRegex = new RegExp(`^\\d+(${splitString}\\d+)*$`); // 숫자로 구분자를 0개이상 포함한 문자열
    
    if (!validStringRegex.test(afterString)) {
      printErrorMsg("\"//(구분자)\\n\(숫자와 구분자가 포함된 문자열)\"의 형식으로 입력해주세요.");
  
      return false;
    }
   
    return afterString;
  }
  
  
  export function checkTypeAndCalc(str) {
    // 지정 문자 정규표현식 - 숫자, 콤마(,), 콜론(:)으로만 이루어지며 시작과 끝은 숫자
    const standardCaseRegex = /^\d[0-9,:]*\d$/;
    
    // 커스텀 정규표현식 - //와 \n 사이에 숫자가 아닌 문자 한 개만 존재하고 해당 문자와 숫자로 이루어진 패턴
    const customCaseRegex = /^\/\/([^\d\s])\\n\d+(?:\1\d+)*$/; // [^\d\s]는 규칙에 해당되는 문자를 저장(캡처)
        
    const transStr = str.replace("\n", "\\n");
    console.log(transStr);

    if (standardCaseRegex.test(transStr)) {
      //console.log("[지정 구분자]");
  
      console.log("합계 : "+ SumNumbers(transStr));  // 숫자 배열의 합 출력
    } 
    else if (customCaseRegex.test(transStr)) {
      //console.log("[커스텀 구분자]");
  
      if(checkCustomString(transStr)) {
        console.log("합계 : "+ SumNumbers(transStr));  // 숫자 배열의 합 출력
      }
    } 
    else {
      printErrorMsg("입력 형식 오류");
    }
  }