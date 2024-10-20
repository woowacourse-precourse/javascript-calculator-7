class StringSpliter {
  #commaSeperator = ",";
  #colonSeperator = ":";

  constructor(userInputString) {
    this.customSeperator = this.getSeperatorFrom(userInputString);
  }

  getSeperatorFrom(userInputString) {
    const customSeperator = userInputString.match(/\/\/(.*?)\\n/);

    if (!customSeperator) {
      return "";
    }

    return customSeperator[1];
  }

  getNumberFrom(string) {
    const seperator = new RegExp(`[${this.#commaSeperator} ${this.#colonSeperator} ${this.customSeperator}]`, "g");

    return string.split(seperator).map((element) => Number(element));
  }
}

export default StringSpliter;
