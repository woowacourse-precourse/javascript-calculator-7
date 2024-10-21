import { CORRECT_CUSTOM_SEPARATOR, ERROR_MESSAGE } from "../constants.js";
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

  parse() {
    if (
      this.#target.replaceAll(
        new RegExp(`[${this.#separatorList.join("")}0-9]`, "g"),
        ""
      ).length !== 0
    ) {
      return {
        success: false,
        errorMessage: ERROR_MESSAGE.UNACCEPTABLE_INPUT,
      };
    }

    const combinations = createDelimiterCombinationList(this.#separatorList);

    const isIncludesMixedSeparator = combinations.some((combination) =>
      this.#target.includes(combination)
    );

    if (isIncludesMixedSeparator) {
      return {
        success: false,
        errorMessage: ERROR_MESSAGE.UNACCEPTABLE_INPUT,
      };
    }

    const isStartsWithSeparator = this.#separatorList.some((separator) =>
      this.#target.startsWith(separator)
    );

    if (isStartsWithSeparator) {
      return {
        success: false,
        errorMessage: ERROR_MESSAGE.START_WITH_SEPARATOR,
      };
    }

    const isEndsWithSeparator = this.#separatorList.some((separator) =>
      this.#target.endsWith(separator)
    );

    if (isEndsWithSeparator) {
      return {
        success: false,
        errorMessage: ERROR_MESSAGE.END_WITH_SEPARATOR,
      };
    }

    return {
      success: true,
    };
  }
}

export default CommonValidator;
