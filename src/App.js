import {Console} from "@woowacourse/mission-utils";

let separator = [",",":"];

function getNumber(input) {
  const inputArray=input.split("");
  let currentNum = '';
  const result=[];

  inputArray.forEach(string=>{
    if(separator.includes(string)){
      if(currentNum.length>0){
        result.push(currentNum);
        currentNum='';
      }
    }else{
      currentNum += string;
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
    Console.print("결과 : "+calculate(input));
  }
}

export default App;
