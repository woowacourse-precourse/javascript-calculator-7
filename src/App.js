import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const tmp = await getInputStr();
    console.log(tmp);
  }
}

async function getInputStr() {
  try {
    const inputStr = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    const separator = [":", ","];
    if (isCustom(inputStr)) {
      const tmpSep = inputStr.slice(2, 3);
      console.log(tmpSep);
    } else {
    }
    return inputStr;
  } catch (error) {
    // reject 되는 경우
  }
}

// 입력문에서의 에러 상황 체크

const isCustom = (inputStr) => {
  const regExp = /(\/\/.{1}\\n).{1,}/;
  return regExp.test(inputStr);
}


export default App;
