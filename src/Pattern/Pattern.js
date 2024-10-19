import { REGEX_SPECIAL_CAHRS } from "../constant/index.js";

export class Pattern {
  constructor(chars) {
    this.chars = chars;
  }

  static REGEX_SPECIAL_CAHRS = [
    "\\",
    "^",
    "$",
    ".",
    "|",
    "?",
    "*",
    "+",
    "(",
    ")",
    "[",
    "]",
    "{",
    "}",
    "-",
    "/",
  ];

  makeOrPattern() {
    return this.chars
      .map((elem) => {
        if (Pattern.REGEX_SPECIAL_CAHRS.includes(elem)) {
          return "\\" + elem;
        } else {
          return elem;
        }
      })
      .join("|");
  }
}
