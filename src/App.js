const { Console } = await import("@woowacourse/mission-utils");
class App {
  async run() {
    const input = await Console.readLineAsync("");
    Console.print(input);
  }

}

export default App;
