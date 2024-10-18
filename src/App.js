import { Console } from '@woowacourse/mission-utils';

// 숫자 리스트를 받아 합을 구해 반환하는 함수
function adder(numList) {
  let sum = 0;
  for(let i = 0; i < numList.length; i++){
      sum += numList[i];
  }
  return sum;
}

// 기본 구분자 (,과 /)로 str을 구분하여 더하는 함수
function divideWithDefault(inputStr){
  let strList = inputStr.split(/[, :]/);

  let numList = strList.map(element => {
      return parseInt(element, 10);
  });

  let sum = adder(numList);
  return sum;
}

// 커스텀 구분자 추출하여 커스텀 구분자로 구분하여 더하는 함수
function divideWithCustom(inputStr){
  // //와 문자열 \n 사이의 캡처 그룹을 추출하여 customDelimeter에 저장
  const DELIMETER = inputStr.match(/\/\/(.+)\\n/)[1];
  const STR = inputStr.split("\\n")[1];

  let strList = STR.split(DELIMETER);

  let numList = strList.map(element => {
      return parseInt(element, 10);
  });

  let sum = adder(numList);
  return sum;
}

class App {
  async run() {
    const INPUT = await Console.readLineAsync("덧셈할 문자열을 입력해주세요.");
    let answer = 0;

    if(INPUT.startsWith('//')){
      answer = divideWithCustom(INPUT);
    }
    else{
      answer = divideWithDefault(INPUT);
    }
    Console.print(`결과 : ${answer}`);
  }
}

export default App;
