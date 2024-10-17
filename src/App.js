import {Console} from "@woowacourse/mission-utils";

let separator = [",",":"];
function findSeparator(input){
  const inputArray=input.split("");
  if(input.slice(0,2)==="//"){
    const start = input.indexOf("//")+2;
    const end = input.indexOf("\\n");
    if(start===1||end===-1){
      throw new Error("[ERROR] 커스텀 구분자 추가를 위해선 //와 \\n 사이에 추가하고자 하는 구분자를 입력해주세요.")
    }else{
      const customSeparator = input.slice(start, end);
      if(customSeparator.length>1||!isNaN(customSeparator)){
        throw new Error("[ERROR] 커스텀 구분자의 입력이 잘못됐습니다.")
      }else{
        separator.push(input.slice(customSeparator))
        return inputArray.slice(end+2);
      }
    }
  }else{
    if(isNaN(inputArray[0])){
      throw new Error("[ERROR] 입력 형식을 지켜주세요.")
    }
    return inputArray;
  }
}

function getNumber(inputArray) {
  let currentNum = '';
  const result=[];
  let isContinuous=0;
  inputArray.forEach(string=>{
    if(separator.includes(string)){
      isContinuous+=1;
      if(isContinuous>1){
        throw new Error("[ERROR] 구분자가 연속으로 사용됐습니다.")
      }
      if(currentNum.length>0){
        result.push(currentNum);
        currentNum='';
      }
    }else{
      if(!isNaN(currentNum)){
        currentNum += string;
        isContinuous=0;
      }
      else{
        throw new Error("[ERROR] 잘못된 구분자가 사용됐습니다.")
      }
    }
  })
  if(currentNum !== ''){
    result.push(currentNum);
  }
  return result;
}

function calculate(input){
  let result = 0;
  getNumber(input).map((number)=>{
    if(isNaN(number)){
      throw new Error("[ERROR] 올바른 숫자를 입력해주세요.")
    }
    result+=Number(number);
  })
  return result;
}

class App {
  async run(
  ) {
    let input="";
    Console.print("덧셈할 문자열을 입력해 주세요.");
    input=await Console.readLineAsync(input);
    Console.print("결과 : "+calculate(findSeparator(input)));
  }
}

export default App;
