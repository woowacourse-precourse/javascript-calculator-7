class App {
  constructor() {
    this.separationSymbols = [',', ':'];
  }

  async run() {
    const input = await this.getInputForAddition();
  }

  async getInputForAddition() {
    const input = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n'
    );

    return input;
  }
}

export default App;
