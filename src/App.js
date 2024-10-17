import {Console} from "@woowacourse/mission-utils";

let separator = [",",":"];
function findSeparator(input){
  const inputArray=input.split("");
  if(input.slice(0,2)==="//"){
    const start = input.indexOf("//")+2;
    const end = input.indexOf("\\n");
    if(start===1||end===-1){
      throw new Error("[ERROR]")
    }else{
      const customSeparator = input.slice(start, end);
      if(customSeparator.length>1||!isNaN(customSeparator)){
        throw new Error("[ERROR]")
      }else{
        separator.push(input.slice(customSeparator))
        return inputArray.slice(end+2);
      }
    }

  }else{
    return inputArray;
  }
}

function getNumber(inputArray) {
  let currentNum = '';
  const result=[];
  inputArray.forEach(string=>{
    if(separator.includes(string)){
      if(currentNum.length>0){
        result.push(currentNum);
        currentNum='';
      }
    }else{
      if(!isNaN(currentNum)){
        currentNum += string;
      }
      else{
        throw new Error("[ERROR]")
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
