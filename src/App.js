import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n").then(function (
      result
    ) {
      const SEPARATED = separate(result);
      Console.print("결과 : " + SEPARATED);
    });
  }
}

const separate = function separateCommas(input) {
  const SEPARATED_COMMAS = input.split(",");
  return SEPARATED_COMMAS[0];
};

export default App;
