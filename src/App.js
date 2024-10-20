import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const basicOperators = [",",":"];
    let inputStr = String(await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n"));
    if (isCustom(inputStr)){
      addCustomOperator(inputStr,basicOperators);
      inputStr = extractCustomString(inputStr);
    }
    Console.print(`결과 : ${calculateSum(extractNums(inputStr,basicOperators))}`);
  }
}

function isCustom(inputStr){
 return inputStr.slice(0,2) === "//" ? true : false;
}

function addCustomOperator(inputStr,basicOperators){
  let customOperator = "";
  if (!inputStr.includes("\\n")){
    throw Error("[ERROR] : 커스텀 구분자 탐지에 실패했습니다.");
  }
  customOperator = inputStr.split("\\n")[0].replace("//","");
  inspectCustomSeperator(customOperator);
  basicOperators.push(customOperator);
}

function extractCustomString(inputStr){
  return inputStr.split("\\n")[1];
}

function inspectCustomSeperator(customOperator){
  if (customOperator === "" || customOperator === " " ){
    throw Error("[ERROR] : 공백은 커스텀구분자가 될 수 없습니다.");
  }
  if (customOperator.length > 1){
    throw Error("[ERROR] : 2자이상의 문자열은 커스텀구분자가 될 수 없습니다.");
  }
  if (!isNaN(customOperator)){
    throw Error("[ERROR] : 숫자는 커스텀구분자가 될 수 없습니다.");
  }
  return;
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
       throw Error('[ERROR] : 잘못된 문자가 입력되었습니다.');
    }
  }
  return nums;
}

function calculateSum(nums){
  return nums.reduce((acc, cur) => {
    if (cur == 0){
      throw Error('[ERROR] : 0은 양수가 아닙니다.');
    }
    return acc + cur;
  }, 0);
}

export default App;

