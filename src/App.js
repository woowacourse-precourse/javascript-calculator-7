import { Console } from '@woowacourse/mission-utils';

function adder(numList) {
  let sum = 0;
  for(let i = 0; i < numList.length; i++){
      if(isNaN(numList[i])){
        continue;  // 숫자가 아닌 값은 무시
      }
      sum += numList[i];
  }
  return sum;
}

function divideWithDefault(INPUT) {
  let strList = INPUT.split(/[, :]/);
  
  // 숫자가 아닌 문자는 무시하고 숫자만 처리
  let numList = strList.map(element => parseInt(element, 10)).filter(element => !isNaN(element));
  
  if (numList.some(element => element <= 0)) {
    Console.print("[ERROR] 양수 값을 입력해주세요.");
    return;
  }

  let sum = adder(numList);
  Console.print(`결과 : ${sum}`);
}

function divideWithCustom(INPUT) {
  if (!INPUT.includes('\\n')) {
    Console.print("[ERROR] 올바른 형식이 아닙니다.");
    return;
  }
  
  const DELIMETER = INPUT.match(/\/\/(.+)\\n/)[1];

  if (DELIMETER.match(/[0-9]/)) {
    Console.print("[ERROR] 구분자로 숫자 값은 불가능합니다.");
    return;
  }

  const STR = INPUT.split('\\n')[1];
  let strList = STR.split(new RegExp(`[${DELIMETER},:]`));

  // 숫자가 아닌 문자는 무시하고 숫자만 처리
  let numList = strList.map(element => parseInt(element, 10)).filter(element => !isNaN(element));

  if (numList.some(element => element <= 0)) {
    Console.print("[ERROR] 양수 값을 입력해주세요.");
    return;
  }

  let sum = adder(numList);
  Console.print(`결과 : ${sum}`);
}

class App {
  async run() {
    const INPUT = await Console.readLineAsync("덧셈할 문자열을 입력해주세요.");

    if (INPUT.length == 0) {
      Console.print("결과 : 0");
    } 
    else if (INPUT.startsWith('//')) {
      divideWithCustom(INPUT);
    } 
    else {
      divideWithDefault(INPUT);
    }
  }
}

export default App;
