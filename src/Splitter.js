import CustomSepatator from "./CustomSeparator.js";
import validator from "./Validator.js";

class Splitter {
  #separator = [",", ":"];

  split(string) {
    if (CustomSepatator.hasPattern(string)) {
      validator.validateCustomSeparator(string);
      this.#separator = [...CustomSepatator.extractSeparator(string)];
      return this.#splitAndConvertToNumbers(
        CustomSepatator.removePattern(string)
      );
    }
    return this.#splitAndConvertToNumbers(string);
  }

  #splitAndConvertToNumbers(string) {
    const splittedResult = this.#splitBySeparator(string);
    return Splitter.#convertToNumber(splittedResult);
  }

  #splitBySeparator(string) {
    const splitRegex = new RegExp(`[${this.#separator.join("")}]`);
    return string.split(splitRegex);
  }

  static #convertToNumber(splittedResult) {
    return splittedResult.map((element) => {
      if (element === "") return 0;
      const converted = parseInt(element, 10);
      return element !== converted.toString() ? NaN : converted; // "1" -> 1, "1.1" -> NaN, "14e1" -> NaN
    });
  }
}

export default Splitter;
