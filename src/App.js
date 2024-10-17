import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    MissionUtils.Console.print(readInput(input));
  }
}

function readInput(input) {
  // set regex
  let regex = /[,:]/

  // check additional rule
  if (input.length > 5) {
    if (input.charCodeAt(0) == 47 && input.charCodeAt(1) == 47 && input.charCodeAt(3) == 92 && input.charCodeAt(4) == 110) {
      regex = myRegex(input[2])
      return mySum(input.slice(5), regex)
      }
    }

  return mySum(input, regex)
}

// set new regex
function myRegex(new_seperator) {
  const BASE1 = "[,:"
  const BASE2 = "]"
  const RE = BASE1 + new_seperator + BASE2
  // const REGEX = new RegExp(RE)
  return RegExp(RE)
}

// split inputs by regex and get sum
function mySum(inputs, regex) {
  // console.log(regex, inputs)
  // console.log(inputs)
  const nums = inputs.split(regex)
  let sum = 0
  for (let i = 0;i < nums.length;i++){
    sum = sum + Number(nums[i])
  }
  return sum
}

export default App;