import { Console } from "@woowacourse/mission-utils";

class App {
  
  async run() {
    //기본연산자
    const basicOperators = [",",":"];
    let inputStr = String(await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n"));
    //커스텀구분자 탐지
    if (isCustom(inputStr)){
      // \n 탐지 후 스플릿  
      addCustomOperator(inputStr,basicOperators);
      inputStr = extractCustomString(inputStr);
    }
    console.log(inputStr);
    //문자열에서 기본연산자 추출 => 기댓값 : [1,2,3]
    const nums = extractNums(inputStr,basicOperators);
    Console.print(`결과 : ${calculateSum(nums)}`);
  }
}
function isCustom(inputStr){
 return inputStr.slice(0,2) === "//" ? true : false;
}

function addCustomOperator(inputStr,basicOperators){
  let customOperator = "";
  if (inputStr.includes("\\n")){
    customOperator = inputStr.split("\\n")[0].replace("//","");
  }else{
    throw Error("[ERROR] : 커스텀 구분자 탐지에 실패했습니다.");
  }
  console.log(`커스텀 문자는 ${customOperator}입니다.`);
  basicOperators.push(customOperator);
}

function extractCustomString(inputStr){
  return inputStr.split("\\n")[1];
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

function calculateSum(nums){
  return nums.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
}

export default App;

