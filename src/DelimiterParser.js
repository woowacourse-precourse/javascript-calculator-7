class DelimiterParser {
  constructor() {
    this.delimiters = [",", ":"];
  }

  parseAndSplit(input) {
    let delimiters = [...this.delimiters];
    input = input.replace("\\n", "\n").trim();
    while (input.startsWith("//")) {
      const delimiterEndIndex = input.indexOf("\n");
      const customDelimiter = input.substring(2, delimiterEndIndex);
      delimiters.push(this.escapeRegExp(customDelimiter));
      input = input.substring(delimiterEndIndex + 1);
      if (delimiterEndIndex === -1) {
        throw new Error("[Error]");
      }
    }

    const delimiterRegex = new RegExp(`(${delimiters.join("|")})`);

    return input
      .split(delimiterRegex)
      .map(Number)
      .filter((num) => !isNaN(num));
  }

  escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
}

export default DelimiterParser;
