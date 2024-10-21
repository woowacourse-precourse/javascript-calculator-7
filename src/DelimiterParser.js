class DelimiterParser {
  constructor(input) {
    this.validate(input);
    this.delimiters = [",", ":"];
  }

  validate(input) {
    this.checkCustomDelimiter(input);
  }

  getCustomDelimiter(input) {
    input = input.replace("\\n", "\n").trim();
    let delimiters = [...this.delimiters];
    while (input.startsWith("//")) {
      const delimiterEndIndex = input.indexOf("\n");
      const customDelimiter = input.substring(2, delimiterEndIndex);
      delimiters.push(this.escapeRegExp(customDelimiter));
      input = input.substring(delimiterEndIndex + 1);
    }
    return [input, delimiters];
  }

  splitString(input) {
    const [parseInput, delimiters] = this.getCustomDelimiter(input);
    const delimiterRegex = new RegExp(`(${delimiters.join("|")})`);

    return parseInput
      .split(delimiterRegex)
      .map(Number)
      .filter((num) => !isNaN(num));
  }

  escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
}

export default DelimiterParser;
