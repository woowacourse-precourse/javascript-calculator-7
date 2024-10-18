import CustomSepatator from "./CustomSeparator.js";
import Validator from "./Validator.js";

class Splitter {
  #separator = [",", ":"];

  split(string) {
    if (CustomSepatator.hasPattern(string)) {
      Validator.validateCustomSeparator(string);
      this.#separator = [...CustomSepatator.extractSeparator(string)];
      return this.#splitAndConvertToNumbers(
        CustomSepatator.removePattern(string)
      );
    }
    return this.#splitAndConvertToNumbers(string);
  }

  #splitAndConvertToNumbers(string) {
    const splittedResult = this.#splitBySeparator(string);
    return Splitter.convertToNumber(splittedResult);
  }

  #splitBySeparator(string) {
    const splitRegex = new RegExp(`[${this.#separator.join("")}]`);
    return string.split(splitRegex);
  }

  static convertToNumber(splittedResult) {
    return splittedResult.map((element) =>
      element === "" ? 0 : parseInt(element, 10)
    );
  }
}

export default Splitter;
