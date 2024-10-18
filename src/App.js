import { Console } from '@woowacourse/mission-utils';

// 숫자 리스트를 받아 합을 구해 반환하는 함수
function adder(numList) {
  let sum = 0;
  for(let i = 0; i < numList.length; i++){
      if(isNaN(numList[i])){
        continue;
      }
      sum += numList[i];
  }
  return sum;
}

// 기본 구분자 (,과 /)로 str을 구분하여 더하는 함수
function divideWithDefault(INPUT){
  let strList = INPUT.split(/[, :]/);
  
  if(strList.some(element => isNaN(element))){
    Console.print("[ERROR] 구분자 사이에는 숫자만 입력 가능합니다.");
    return;
  }
  else{
    let numList = strList.map(element => {
      return parseInt(element, 10);
  });
  if(numList.some(element=> element <= 0)){
    Console.print("[ERROR] 양수 값을 입력해주세요.");
    return;
  }
  let sum = adder(numList);
  Console.print(`결과 : ${sum}`);
  }
}

// 커스텀 구분자 추출하여 커스텀 구분자로 구분하여 더하는 함수
function divideWithCustom(INPUT){
  if(!INPUT.includes('\\n')){
    Console.print("[ERROR] 올바른 형식이 아닙니다.");
    return;
  }
  // //와 문자열 \n 사이의 캡처 그룹을 추출하여 customDelimeter에 저장
  const DELIMETER = INPUT.match(/\/\/(.+)\\n/)[1];

if(DELIMETER.match(/[0-9]/)){
    Console.print("[ERROR] 구분자로 숫자 값은 불가능합니다.");
    return;
  }

  const STR = INPUT.split("\\n")[1]; //나눌 문자
  let strList = STR.split(DELIMETER);

  if(strList.some(element => isNaN(element))){
    Console.print("[ERROR] 구분자 사이에는 숫자만 입력 가능합니다.");
    return;
  }

  let numList = strList.map(element => {
      return parseInt(element, 10);
  });

  if(numList.some(element=> element <= 0)){
    Console.print("[ERROR] 양수 값을 입력해주세요.");
    return;
  }

  let sum = adder(numList);
  Console.print(`결과 : ${sum}`);
}

class App {
  async run() {
    const INPUT = await Console.readLineAsync("덧셈할 문자열을 입력해주세요.");

    if(INPUT.length == 0){
      Console.print("[ERROR] 값을 입력하세요.");
    }
    else if(INPUT.startsWith('//')){
      divideWithCustom(INPUT);
    }
    else{
      divideWithDefault(INPUT);
    }
  }
}

export default App;
