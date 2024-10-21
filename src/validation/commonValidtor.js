import { CORRECT_CUSTOM_SEPARATOR, ERROR_MESSAGE } from "../constants.js";

class CommonValidator {
  #target;
  #separatorList;

  constructor(target, separatorList) {
    this.#target = this.#getInitialTarget(target);
    this.#separatorList = separatorList;
  }

  #getInitialTarget(target) {
    const WITHOUT_CUSTOM_SEPARATOR_INDEX = 5;

    if (target.startsWith(CORRECT_CUSTOM_SEPARATOR.PREFIX)) {
      return target.substring(WITHOUT_CUSTOM_SEPARATOR_INDEX);
    }
    return target;
  }

  parse() {
    if (this.#includesNotAllowedString()) {
      return {
        success: false,
        errorMessage: ERROR_MESSAGE.UNACCEPTABLE_INPUT,
      };
    }

    if (this.#isInvalidSeparatorLength()) {
      return {
        success: false,
        errorMessage: ERROR_MESSAGE.INVALID_SEPARATOR_LENGTH,
      };
    }

    if (this.#isStartsWithSeparator()) {
      return {
        success: false,
        errorMessage: ERROR_MESSAGE.START_WITH_SEPARATOR,
      };
    }

    if (this.#isEndsWithSeparator()) {
      return {
        success: false,
        errorMessage: ERROR_MESSAGE.END_WITH_SEPARATOR,
      };
    }

    return {
      success: true,
    };
  }

  #includesNotAllowedString() {
    const EMPTY_STRING_LENGTH = 0;

    return (
      this.#target.replaceAll(
        new RegExp(`[${this.#separatorList.join("")}0-9]`, "g"),
        ""
      ).length !== EMPTY_STRING_LENGTH
    );
  }

  #isInvalidSeparatorLength() {
    const separatorListFromInput = this.#target.split(/\d/).filter(Boolean);

    return separatorListFromInput.some((separator) => separator.length !== 1);
  }

  #isStartsWithSeparator() {
    return this.#separatorList.some((separator) =>
      this.#target.startsWith(separator)
    );
  }

  #isEndsWithSeparator() {
    return this.#separatorList.some((separator) =>
      this.#target.endsWith(separator)
    );
  }
}

export default CommonValidator;
