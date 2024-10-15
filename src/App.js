class App {
  async run() {
    const userInput = await this.getUserInput();
    Console.print(userInput);
  }

  async getUserInput() {
    return await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
  }
}

export default App;
