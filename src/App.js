import Console from "@woowacourse/mission-utils";
class App {
  async run() {
    Console.print("덧셈할 문자열을 입력해 주세요: ");
    const input = await Console.readLineAsync();
    Console.print("입력된 문자열: ${input}");
  }
}

export default App;
