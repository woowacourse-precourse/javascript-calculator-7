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

const SEPARATOR = [",", ":"];

const separate = function separateCommasAndColons(input) {
  if (input.length >= 5 && input.includes("//") && input.includes("\\n")) {
    const HEAD = input.indexOf("//") + 2;
    const TAIL = input.indexOf("\\n");
    SEPARATOR.push(input.substring(HEAD, TAIL));
    input = input.substring(TAIL + 2);
  }

  let SUM = 0;
  const SEPARATED = input.split("");

  for (const NUM of SEPARATED) {
    if (!SEPARATOR.includes(NUM)) {
      const PARSED = parseInt(NUM, 10);

      if (isNaN(PARSED)) {
        throw new Error("[ERROR]");
      }

      SUM += PARSED;
    }
  }

  return SUM;
};

export default App;
