class App {
  constructor() {
    this.sum = 0;
    this.separatorArray = [",", ":"];
  }
  async run() {
    let userInput = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    const customSeparator = userInput.search(customSeparatorReg);
    if (customSeparator >= 0) {
      this.separatorArray.push(userInput[2]);
      userInput = userInput.slice(5);
    }
  }
}

export default App;
