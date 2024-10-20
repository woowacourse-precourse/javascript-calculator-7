import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const tmp = await getInputStr();
    console.log(tmp);
  }
}

async function getInputStr() {
  try {
    let inputStr = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    const separator = [":", ","];
    let customBoolean = false;
    // 커스텀 구분자를 가지는지 확인.
    customBoolean = isCustom(inputStr);

    // 구분자를 이용해 문자열 구분.
    return inputStr;
  } catch (error) {
     return error;
    // reject 되는 경우
  }
}

// 입력문에서의 에러 상황 체크

const isCustom = (inputStr) => {
  const regExp = /(\/\/.{1}\\n){1}.{0,}/; 
  const regExp2 = /(\/\/\D{1}\\n){1}.{0,}/;
  if (regExp.test(inputStr)) { // 커스텀 구분자의 형식을 가진 문자열 이라면,
    if (!regExp2.test(inputStr)) {
      throw new Error("[ERROR] 잘못된 입력 형식 입니다.(구분자 길이 오류 or 잘못된 커스텀 구분자 형식)");
    }
    return true;
  }
  return false;
}


export default App;
