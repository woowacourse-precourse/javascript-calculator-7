import { Console } from "@woowacourse/mission-utils";

class App {
  
  async run() {
    //기본연산자
    const basicOperators = [",",":"];
    const inputStr = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
    
    //문자열에서 기본연산자 추출 => 기댓값 : [1,2,3]
    const nums = extractNums(inputStr,basicOperators);
    
    Console.print(nums);
  }
}

function extractNums(inputStr,basicOperators){
  const nums = [];
  for (const item of inputStr){
    if (basicOperators.includes(item)){
      continue;
    }
    if (!isNaN(item)){
      nums.push(Number(item));
    }
    else{
       throw Error('[ERROR] : 잘못된 문자가 입력되었습니다.');;
    }
  }
  return nums;
}

export default App;
