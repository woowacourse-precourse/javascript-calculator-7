import { CORRECT_CUSTOM_SEPARATOR } from "../constants.js";

class CustomSeparatorValidator {
  #target;
  #separatorList;

  constructor(target, separatorList) {
    this.#target = target;
    this.#separatorList = separatorList;
  }

  isValid() {
    if (!this.#target.startsWith(CORRECT_CUSTOM_SEPARATOR.PREFIX)) {
      return true;
    }

    const lineBreakStringIndex = this.#target.indexOf(
      CORRECT_CUSTOM_SEPARATOR.SUFFIX
    );

    const CORRECT_CUSTOM_SEPARATOR_INDEX = 2;
    const CORRECT_CUSTOM_SEPARATOR_PREFIX_INDEX = 3;

    if (lineBreakStringIndex !== CORRECT_CUSTOM_SEPARATOR_PREFIX_INDEX) {
      return false;
    }

    const customSeparator = this.#target[CORRECT_CUSTOM_SEPARATOR_INDEX];

    if (
      this.#separatorList.includes(customSeparator) ||
      Number.isInteger(Number(customSeparator))
    ) {
      return false;
    }

    this.#separatorList.push(customSeparator);

    return true;
  }
}

export default CustomSeparatorValidator;
