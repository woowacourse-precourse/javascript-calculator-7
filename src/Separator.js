class Separator {
  makeCustomSeparator(string) {
    let customSeparator = "";
    this.checkSeparatorValid(string);
    let IS_CUSTOM = false;

    const separator = string.match(/\/\/(.*?)\\n(.*)/);
    if (separator) {
      customSeparator = separator[1];
      string = separator[2];
      IS_CUSTOM = true;
    }

    return [customSeparator, string, IS_CUSTOM];
  }

  checkSeparatorValid(string) {
    if (string.slice(0, 2) === "//" && !string.includes("\\n")) {
      throw new Error("[ERROR] 커스텀 구분자가 지정되지 않았습니다.");
    }
  }
}

export default Separator;
