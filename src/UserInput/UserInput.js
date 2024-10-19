import { separateString } from "../util/separateString.js";

export class UserInput {
  constructor(userInput) {
    this.userInput = userInput;
  }

  #DEFAULT_SEPARATOR = ",:";

  splitInput() {
    return this.userInput.startsWith("/")
      ? separateString(/\\n/, this.userInput.slice(2))
      : [this.#DEFAULT_SEPARATOR, this.userInput];
  }
}
