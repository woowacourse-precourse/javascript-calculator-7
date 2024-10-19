import { CUSTOM_VALIDATOR } from "../constants.js";

class CommonValidator {
  #target;
  #separatorList;

  constructor(target, separatorList) {
    this.#target = this.getInitialTarget(target);
    this.#separatorList = separatorList;
  }

  getInitialTarget(target) {
    if (target.startsWith(CUSTOM_VALIDATOR.PREFIX)) {
      return target.substring(5);
    }
    return target;
  }

  isValid() {
    if (
      this.#target.replaceAll(
        new RegExp(`[${this.#separatorList.join("")}0-9]`, "g"),
        ""
      ).length !== 0
    ) {
      return false;
    }

    const combinations = this.generateDelimiterCombinations(
      this.#separatorList
    );

    return combinations.every(
      (combination) => !this.#target.includes(combination)
    );
  }

  generateDelimiterCombinations(delimiters, minLength = 2, maxLength = 3) {
    const result = [];

    function backtrack(combination, start) {
      if (combination.length >= minLength) {
        result.push(combination.join(""));
      }

      if (combination.length === maxLength) {
        return;
      }

      for (let i = 0; i < delimiters.length; i++) {
        backtrack([...combination, delimiters[i]], i);
      }
    }

    backtrack([], -1);
    return result;
  }
}

export default CommonValidator;
