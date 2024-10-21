import { separateString } from "../util/separateString.js";

export class UserInput {
  constructor(userInput) {
    this.userInput = userInput;
  }

  static DEFAULT_SEPARATOR = ",:";

  getSplitInput() {
    return this.userInput.startsWith("/")
      ? separateString(/\\n/, this.userInput.slice(2))
      : [UserInput.DEFAULT_SEPARATOR, this.userInput];
  }
}
