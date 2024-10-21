class StringSpliter {
  #splitTargetString;
  #customSeperator = "";
  #seperators = [",", ":"];

  constructor(userInputString) {
    this.#splitTargetString = userInputString;
  }

  findCustomSeperator() {
    const customSeperator = this.#splitTargetString.match(/\/\/(.*?)\\n/);

    if (!customSeperator) {
      return;
    }

    this.#customSeperator = customSeperator[1];
  }

  seperateNumberString() {
    if (!this.#customSeperator) {
      return;
    }

    this.#splitTargetString = this.#splitTargetString.match(/\\n(.*)/)[1];
  }

  getNumbers() {
    const seperator = new RegExp(`[${this.#seperators[0]} ${this.#seperators[1]} ${this.#customSeperator}]`, "g");

    return this.#splitTargetString.split(seperator).map((element) => Number(element));
  }
}

export default StringSpliter;
