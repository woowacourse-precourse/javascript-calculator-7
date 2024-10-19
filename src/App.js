import { MissionUtils } from "@woowacourse/mission-utils";

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
    return input;
  } catch (error) {
  }
};

class App {
  async run() {
    const input = await getText();
    let splitunit = getSplitunit(input);
  }
}

export default App;
