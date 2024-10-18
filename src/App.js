import { Console } from "@woowacourse/mission-utils";

async function getInput() {
  return await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
}

function splitInput(str) {
  let arr = "";
  if (str.charAt(0) == "/") {
    // 문장 시작이 / 인 경우 - 커스텀 구분자
    const customSep = str.charAt(2); // 커스텀 구분자 뽑아내기
    const newStr = str.slice(5); // 문자 5개 스킵하고 새로운 문자열 (예시 형태: //;\n1;2;3 => 1;2;3)
    arr = [...newStr];

    console.log(arr);
  } else {
    // 문장 시작이 /가 아닌 경우
    arr = str.split(/[,:]/g);
  }

  return arr;
}

class App {
  async run() {
    const input = await getInput();
    console.log(input);
    console.log(splitInput(input));
  }
}

export default App;
