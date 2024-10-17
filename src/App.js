import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    // MissionUtils.Console.print(input)
    readInput(input);
  }
}

function readInput(input) {
  // set diver
  const regex = /[,:]/
  // let re = new RegExp("[,:]");
  // if (input.length > 5) {
  //   if (input.charCodeAt(0) == 47 && input.charCodeAt(1) == 47 && input.charCodeAt(3) == 92 && input.charCodeAt(4) == 110) {
  //     regex = myRegex(input[2])
  //     }
  //   }
  // const nums = input.split(/[,:]/)

  const sum = mySum(input, regex)
  // const temp = input.split(/[,:]/)

  MissionUtils.Console.print(sum)
  
  // for (let i = 0; i < input.length; i++){
  //   // MissionUtils.Console.print(input[i])
  //   // MissionUtils.Console.print(typeof input[i])
  //   // console.log(typeof input[i])
  //   MissionUtils.Console.print(input[i] + input.charCodeAt(i));
  // }
}

// function myRegex(new_seperator) {
//   const BASE1 = "/[,:"
//   const BASE2 = "]/"
//   const REGEX = BASE1 + new_seperator + BASE2
//   return REGEX
// }

// function isRightInput(input) {
//   return true
//   return false
// }

// regex대로 문자열을 나누고 합을 리턴하는 함수
function mySum(inputs, regex) {
  const nums = inputs.split(regex)
  let sum = 0
  for (let i = 0;i < nums.length;i++){
    sum = sum + Number(nums[i])
  }
  return sum
}

// tests
//;\n1;2;3
// 1,2:3
export default App;