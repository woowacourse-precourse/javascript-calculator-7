//구분자 처리 로직

class DelimiterCheck {
  static extract(input) {
    const delimiterPattern = /^\/\/(.*?)\\n/;
    const match = input.match(delimiterPattern);
    let delimiters = [",", ":"];

    if (match) {
      const customDelimiter = match[1];
      delimiters = [customDelimiter, ...delimiters];
      input = input.slice(match[0].length);
    }

    return { delimiters, trimmedInput: input };
  }
}

export default DelimiterCheck;
