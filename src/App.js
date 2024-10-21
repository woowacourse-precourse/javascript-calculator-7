import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    Console.print("덧셈할 문자열을 입력해주세요.");
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해주세요.: ");
    const reg = input.match(/\/\/(.*?)\\n(.*)/);
    const result = reg ? reg[2].split(new RegExp(`[,:${reg[1]}]`)) : input.split(/[,:]/);

    const sum = result.map((value) => {
      const num = Number(value);
      if (isNaN(num) || num <= 0) throw new Error("[ERROR]");
      return num;
    }).reduce((prev, now) => prev + now, 0);

    Console.print("결과 : " + sum);
  }
}

export default App;
