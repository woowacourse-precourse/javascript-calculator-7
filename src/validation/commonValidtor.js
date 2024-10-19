import { CUSTOM_VALIDATOR } from "../constants.js";
import { createDelimiterCombinationList } from "../utils.js";

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

    const combinations = createDelimiterCombinationList(this.#separatorList);

    return combinations.every(
      (combination) => !this.#target.includes(combination)
    );
  }
}

export default CommonValidator;
