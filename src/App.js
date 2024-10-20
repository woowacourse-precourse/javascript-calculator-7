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
    const input = await MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력해 주세요. \n");

    // 문자열이 아닌 입력
    if(typeof input !== "string") throw new Error("[ERROR] 입력 형태가 문자열이 아닙니다.");

    // 음수가 포함된 입력
    let noNumber = input.match(/-\d+/);
    if(noNumber && noNumber.length > 0){
      throw new Error("[ERROR] 음수가 포함되었습니다.");
    }
    // 숫자로만 구성된 입력
    if(/^\d+$/.test(input.replace(/\s+/g, ""))) throw new Error("[ERROR] 구분자 없이 숫자만 입력했습니다.");

    // 기본 구분자로만 구성된 입력
    if (/^[,:]+$/.test(input.replace(/\s+/g, ""))) {
      throw new Error("[ERROR] 구분자로만 이루어진 입력입니다.");
    }

    // 커스텀 구분자만 구성된 입력
    if(input.startsWith("//") && input.includes("\n")){
      const checknumber = input.split("\n")[1];
      if(!checknumber || !/\d/.test(checknumber)) throw new Error("[ERROR] 구분자로만 이루어진 입력입니다.z");
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
