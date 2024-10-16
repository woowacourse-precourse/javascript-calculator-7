import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요."
    );
    isEmptyString(input);
  }
}

function isEmptyString(input) {
  const ERROR_MESSAGE = "ERROR : 빈 문자열이 입력되었습니다";
  if (input.trim() === "") {
    Console.print(ERROR_MESSAGE);
    return false;
  }
  return true;
}


export default App;
