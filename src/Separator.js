class Separator {
  makeCustomSeparator(string) {
    let customSeparator = "";
    this.checkSeparatorValid(string);

    const separator = string.match(/\/\/(.*?)\\n(.*)/);
    if (separator) {
      customSeparator = separator[1];
      string = separator[2];
    }
    return [customSeparator, string];
  }

  checkSeparatorValid(string) {
    if (string.slice(0, 2) === "//" && !string.includes("\\n")) {
      throw new Error("[ERROR] 커스텀 구분자가 지정되지 않았습니다.");
    }
  }
}

export default Separator;
