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

  // 각 문자열에 대해 int type으로 변경
  let numList = strList.map(element => {
      return parseInt(element, 10);
  });

  // 숫자 리스트에 대해 합 구하여 반환
  let sum = adder(numList);
  return sum;
}

class App {
  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해주세요.");
    let answer = 0;
    // 기본 구분자 (,와 :) 에 대한 결과
    answer = divideWithDefault(input);

    Console.print(`결과 : ${answer}`);
  }
}

export default App;
