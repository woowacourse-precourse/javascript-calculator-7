import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    while (1) {
      let INPUT = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );

      let re = new RegExp("//(.*?)\\\\n");
      const re_num = new RegExp("[0-9]");
      let split_input;
      let OUTPUT;

      if ((split_input = re.exec(INPUT)) !== null) {
        let new_re = split_input[1];
        let new_input = INPUT.replace(re, "");
        OUTPUT = new_input.split(new_re).map(Number);
      } else {
        let default_re = new RegExp(",|:");
        OUTPUT = INPUT.split(default_re).map(Number);
      }
      if (OUTPUT.includes(NaN)) {
        Console.print("[ERROR]");
        break;
      }
      const sum = OUTPUT.reduce((acc, cur) => acc + cur, 0);
      Console.print("결과 : " + sum);
    }
  }
}

export default App;
