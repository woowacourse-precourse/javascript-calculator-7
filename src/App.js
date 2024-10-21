import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    while (1) {
      let input = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );

      let re = new RegExp("//(.*?)\\\\n");
      let split_input;
      let output;

      if ((split_input = re.exec(input)) !== null) {
        let new_re = split_input[1];
        let new_input = input.replace(re, "");
        output = new_input.split(new_re).map(Number);
      } else {
        let default_re = new RegExp(",|:");
        output = input.split(default_re).map(Number);
        if (input.includes("-")) {
          Console.print("[ERROR]");
          break;
        }
      }
      if (output.includes(NaN)) {
        Console.print("[ERROR]");
        break;
      }
      const sum = output.reduce((acc, cur) => acc + cur, 0);
      Console.print("결과 : " + sum);
    }
  }
}

export default App;
