import { MissionUtils } from "@woowacourse/mission-utils";

function sumNumber(numberArr){
  let sum = 0;
  for(var number of numberArr) sum += number;
  return sum;
}

function extractNumber(input, splitunit){
  if(input.indexOf("\\n") != -1)
    input = input.substring(input.indexOf("\\n")+2, input.length);

  const regex = new RegExp(`[${splitunit}]`);
  let numberArr = input.split(regex).map(Number);
  return numberArr;
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

    let noNumber = input.match(/-\d+/);
    if(noNumber && noNumber.length > 0){
      throw new Error('[ERROR]');
    }
    return input;
  } catch (error) {
    MissionUtils.Console.print(error);
    return Promise.reject(error);
  }
};

class App {
  async run() {
    try{
      const input = await getText();

      if(!input) return;

      let splitunit = getSplitunit(input);
      let numberArr = extractNumber(input, splitunit);
      let sum = sumNumber(numberArr);
      MissionUtils.Console.print(`결과 : ${sum}`);
    } catch(error){
      MissionUtils.Console.print("[Error] 프로그램이 종료되었습니다.");
      throw error;
    }
  }
}

export default App;
