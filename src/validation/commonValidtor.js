import { CORRECT_CUSTOM_SEPARATOR } from "../constants.js";
import { createDelimiterCombinationList } from "../utils.js";

class CommonValidator {
  #target;
  #separatorList;

  constructor(target, separatorList) {
    this.#target = this.getInitialTarget(target);
    this.#separatorList = separatorList;
  }

  getInitialTarget(target) {
    const WITHOUT_CUSTOM_SEPARATOR_INDEX = 5;

    if (target.startsWith(CORRECT_CUSTOM_SEPARATOR.PREFIX)) {
      return target.substring(WITHOUT_CUSTOM_SEPARATOR_INDEX);
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

    return !combinations.some((combination) =>
      this.#target.includes(combination)
    );
  }
}

export default CommonValidator;
