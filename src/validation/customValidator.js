import { CUSTOM_VALIDATOR } from "../constants.js";

class CustomSeparatorValidator {
  #target;
  #separatorList;

  constructor(target, separatorList) {
    this.#target = target;
    this.#separatorList = separatorList;
  }

  isValid() {
    if (!this.#target.startsWith(CUSTOM_VALIDATOR.PREFIX)) {
      return true;
    }

    const lineBreakStringIndex = this.#target.indexOf(CUSTOM_VALIDATOR.SUFFIX);

    if (lineBreakStringIndex !== 3) {
      return false;
    }

    const customSeparator = this.#target[2];

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
