class StringSpliter {
  #commaSeperator = ",";
  #colonSeperator = ":";

  constructor(userInputSeperator = "") {
    this.customSeperator = userInputSeperator;
  }

  getNumberFrom(string) {
    const seperator = new RegExp(`[${this.#commaSeperator} ${this.#colonSeperator} ${this.customSeperator}]`, "g");

    return string.split(seperator).map((element) => Number(element));
  }
}

export default StringSpliter;
