class CustomSeparatorValidator {
  #target;
  #separatorList;

  constructor(target, separatorList) {
    this.#target = target;
    this.#separatorList = separatorList;
  }

  isValid() {
    if (!this.#target.startsWith("//")) {
      return true;
    }

    const lineBreakStringIndex = this.#target.indexOf("\\n");

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
