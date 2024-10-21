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
      let check = 0;

      if ((split_input = re.exec(input)) !== null) {
        let new_re = split_input[1];
        let new_input = input.replace(re, "");
        output = new_input.split(new_re).map(Number);
      } else {
        let default_re = new RegExp(",|:");
        output = input.split(default_re).map(Number);
      }

      for (let i = 0; i < output.length; i++) {
        let value = output[i];
        if (value < 0 || value == NaN) {
          check = 1;
        }
      }
      if (check == 0) {
        const sum = output.reduce((acc, cur) => acc + cur, 0);
        Console.print("결과 : " + sum);
      } else {
        Console.print("[ERROR]");
        break;
      }
    }
  }
}

export default App;
