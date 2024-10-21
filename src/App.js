import Console from "@woowacourse/mission-utils";
class App {
  async run() {
    Console.print("덧셈할 문자열을 입력해 주세요: ");
    const input = await Console.readLineAsync();
  }

  calculate(input) {
    if (input == " ") {
      return 0;
    }

    let base = [",", ":"];
    let stringInput = input;
  }
}

export default App;
