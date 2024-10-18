class App {
  async run() {}
  splitByComma(input) {
    return splitBySeperaterChar(":", input);
  }

  splitBySemiColumn(input) {
    return splitBySeperaterChar(";", input);
  }

  splitBySeperaterChar(sepChar, input) {
    let result;
    if (!!input) {
      const numbers = input.split(sepChar);
      result = this.sum(numbers);
      Console.print(result);
      return result;
    }
  }
}

export default App;
