import { REGEX_SPECIAL_CAHRS } from "../constant/index.js";

export class Pattern {
  constructor(chars) {
    this.chars = chars;
  }

  makeOrPattern() {
    return this.chars
      .map((elem) => {
        if (REGEX_SPECIAL_CAHRS.includes(elem)) {
          return "\\" + elem;
        } else {
          return elem;
        }
      })
      .join("|");
  }
}
