import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      let input =
        (await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n")) || "";

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
      }

      for (let i = 0; i < output.length; i++) {
        let value = output[i];
        if (value < 0) {
          throw Error("[ERROR] 음수 값을 입력했습니다.");
        }
        if (isNaN(value)) {
          throw Error("[ERROR] 잘못된 입력 값입니다.");
        }
      }

      const sum = output.reduce((acc, cur) => acc + cur, 0);
      Console.print("결과 : " + sum);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
