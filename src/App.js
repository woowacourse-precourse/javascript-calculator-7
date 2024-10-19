import { MissionUtils } from "@woowacourse/mission-utils";

function sumNumber(input, splitunit){
  if(input.indexOf("\\n") != -1)
    input = input.substring(input.indexOf("\\n")+2, input.length);

  const regex = new RegExp(`[${splitunit}]`);
  let numberArr = input.split(regex).map(Number);
  let sum = 0;
  for(var number of numberArr) sum += number;
  return sum;
}

function getSplitunit(input){
  if(input.indexOf("//") != -1 && input.indexOf("\\n") != -1){
    let start = input.indexOf("//") + 2;
    let end = input.indexOf("\\n");
    return input.substring(start, end);
  }
  return ",:";
};

async function getText() {
  try {
    const input = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');

    if(!isNaN(input)){
      throw new Error('[ERROR]');
    }
    return input;
  } catch (error) {
    MissionUtils.Console.print(error);
    return null;
  }
};

class App {
  async run() {
    const input = await getText();

    if(!input) return;

    let splitunit = getSplitunit(input);
    let sum = sumNumber(input, splitunit);
    MissionUtils.Console.print(sum);
  }
}

export default App;
