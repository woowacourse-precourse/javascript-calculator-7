class Parser {
  constructor(inputString) {
    this.inputString = inputString;
    this.inputNums = [];
  }

  handleDefaultDelimiter() {
    if (/^\d+([,:]\d+)*$/.test(this.inputString)) {
      const parsedNums = this.inputString.match(/\d+/g);
      this.inputNums = parsedNums.map(Number);
      return true;
    }
    return false;
  }

  handleCustomDelimiter() {
    const customDelimiterMatch = this.inputString.match(/^\/\/(.)\\n(.*)$/);

    if (customDelimiterMatch) {
      const customDelimiter = this.escapeRegExp(customDelimiterMatch[1]);
      const delimiterRegex = new RegExp(`[${customDelimiter},:]`);
      const validationRegex = new RegExp(`^\\d+([${customDelimiter},:]\\d+)*$`);

      if (validationRegex.test(customDelimiterMatch[2])) {
        this.inputString = customDelimiterMatch[2];
      } else {
        throw new Error('[ERROR] 계산을 위한 문자열의 형식이 잘못 되었습니다.');
      }

      const parsedNums = this.inputString.split(delimiterRegex).map(Number);
      this.inputNums = parsedNums;
    } else {
      throw new Error('[ERROR] 커스텀 구분자 할당 형식이 잘못 되었습니다.');
    }
  }

  escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  parse() {
    if (!this.handleDefaultDelimiter()) {
      this.handleCustomDelimiter();
    }
    return this.inputNums;
  }
}

export default Parser;
