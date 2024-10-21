import { CORRECT_CUSTOM_SEPARATOR, ERROR_MESSAGE } from "../constants.js";

class CustomSeparatorValidator {
  #target;
  #separatorList;

  constructor(target, separatorList) {
    this.#target = target;
    this.#separatorList = separatorList;
  }

  parse() {
    if (!this.#target.startsWith(CORRECT_CUSTOM_SEPARATOR.PREFIX)) {
      return {
        success: true,
      };
    }

    const customSeparatorSuffix = this.#target.indexOf(
      CORRECT_CUSTOM_SEPARATOR.SUFFIX
    );

    const CORRECT_CUSTOM_SEPARATOR_INDEX = 2;
    const CORRECT_CUSTOM_SEPARATOR_PREFIX_INDEX = 3;

    if (customSeparatorSuffix !== CORRECT_CUSTOM_SEPARATOR_PREFIX_INDEX) {
      return {
        success: false,
        errorMessage: ERROR_MESSAGE.INVALID_SEPARATOR_LENGTH,
      };
    }

    const customSeparator = this.#target[CORRECT_CUSTOM_SEPARATOR_INDEX];

    if (this.#separatorList.includes(customSeparator)) {
      return {
        success: false,
        errorMessage: ERROR_MESSAGE.DEFAULT_SEPARATOR_INCLUDE_CUSTOM_SEPARATOR,
      };
    }

    if (Number.isInteger(Number(customSeparator))) {
      return {
        success: false,
        errorMessage: ERROR_MESSAGE.CUSTOM_SEPARATOR_IS_NUMBER,
      };
    }

    this.#separatorList.push(customSeparator);

    return {
      success: true,
    };
  }
}

export default CustomSeparatorValidator;
