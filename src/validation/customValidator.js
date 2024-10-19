import { CORRECT_CUSTOM_SEPARATOR } from "../constants.js";

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

    const lineBreakStringIndex = this.#target.indexOf(
      CORRECT_CUSTOM_SEPARATOR.SUFFIX
    );

    const CORRECT_CUSTOM_SEPARATOR_INDEX = 2;
    const CORRECT_CUSTOM_SEPARATOR_PREFIX_INDEX = 3;

    if (lineBreakStringIndex !== CORRECT_CUSTOM_SEPARATOR_PREFIX_INDEX) {
      return {
        success: false,
        errorMessage: "Custom Separator Length must be 1",
      };
    }

    const customSeparator = this.#target[CORRECT_CUSTOM_SEPARATOR_INDEX];

    if (this.#separatorList.includes(customSeparator)) {
      return {
        success: false,
        errorMessage: "Custom Separator can't be initial separator",
      };
    }

    if (Number.isInteger(Number(customSeparator))) {
      return {
        success: false,
        errorMessage: "Custom Separator can't be number",
      };
    }

    this.#separatorList.push(customSeparator);

    return {
      success: true,
    };
  }
}

export default CustomSeparatorValidator;
