import { Console } from "@woowacourse/mission-utils";


class App {
  async run() {
    // 문자열 입력
    Console.print("덧셈할 문자열을 입력해 주세요.");
    const input = await Console.readLineAsync("");

    let words;

    // 문자열 구분
    if (input.startsWith("//") && input.substring(3, 5) === "\\n") {
      words = input.substring(5).split(input[2]).map(Number);
    } else {
      words = input.split(/[,|:]/).map(Number);
    }
    Console.print(words);

    // 양수인지 체크
    const isPositiveInt = (word) => /^\d+$/.test(word);

    // 값 체크 및 출력
    if (words.includes(NaN) || words.includes(null) || words.includes(undefined)) {
      Console.print("[ERROR] 숫자나 구분자의 입력이 올바른지 확인해주세요.");
    } else if(!words.every(word => isPositiveInt(word))) {
      Console.print("[ERROR] 양수만 입력해주세요.")
    } else {
      const sum = words.reduce((acc, curr) => acc + curr);
      Console.print("결과: " + sum);
    }
  }
}

export default App;
