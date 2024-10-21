import { CORRECT_CUSTOM_SEPARATOR, ERROR_MESSAGE } from "../constants.js";

class CustomSeparatorValidator {
  #target;
  #separatorList;
  static validCustomSeparatorIndex = 2;
  static validCustomSeparatorSuffixIndex = 3;

  constructor(target, separatorList) {
    this.#target = target;
    this.#separatorList = separatorList;
  }

  parse() {
    if (this.#isNotIncludesCustomSeparator()) {
      return {
        success: true,
      };
    }

    if (this.#isInvalidCustomSeparatorLength()) {
      return {
        success: false,
        errorMessage: ERROR_MESSAGE.INVALID_SEPARATOR_LENGTH,
      };
    }

    const customSeparator =
      this.#target[CustomSeparatorValidator.validCustomSeparatorIndex];

    if (this.#isDefaultSeparatorListIncludesCustomSeparator(customSeparator)) {
      return {
        success: false,
        errorMessage: ERROR_MESSAGE.DEFAULT_SEPARATOR_INCLUDE_CUSTOM_SEPARATOR,
      };
    }

    if (this.#isCustomValidatorNumber(customSeparator)) {
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

  #isNotIncludesCustomSeparator() {
    return !this.#target.startsWith(CORRECT_CUSTOM_SEPARATOR.PREFIX);
  }

  #isInvalidCustomSeparatorLength() {
    const customSeparatorSuffixIndex = this.#target.indexOf(
      CORRECT_CUSTOM_SEPARATOR.SUFFIX
    );

    const isInvalidCustomSuffixSeparatorIndex =
      customSeparatorSuffixIndex !==
      CustomSeparatorValidator.validCustomSeparatorSuffixIndex;

    return isInvalidCustomSuffixSeparatorIndex;
  }

  #isDefaultSeparatorListIncludesCustomSeparator(customSeparator) {
    return this.#separatorList.includes(customSeparator);
  }

  #isCustomValidatorNumber(customSeparator) {
    return Number.isInteger(Number(customSeparator));
  }
}

export default CustomSeparatorValidator;
