import { DEFAULT_DIVIDERS, ERROR_MESSAGES } from "../constants.js";

class InputParser {
  parse(input) {
    if (input === "") {
      return [0];
    }

    const { divider, numberString } = this.parseInput(input);
    const numberArray = this.createNumberArray(numberString, divider);
    return this.validateNumber(numberArray);
  }

  parseInput(input) {
    if (input.startsWith("//")) {
      return this.parseCustomDivider(input);
    }

    const defaultDividers = DEFAULT_DIVIDERS;
    if (defaultDividers.some((div) => input.includes(div))) {
      return { divider: defaultDividers, numberString: input };
    }

    throw new Error(ERROR_MESSAGES.NO_VALID_DIVIDER);
  }

  parseCustomDivider(input) {
    const endIndex = input.indexOf("\\n");
    const customDivider = input.slice(2, endIndex);
    const numberString = input.slice(endIndex + 2);

    if (numberString.length === 0) {
      throw new Error(ERROR_MESSAGES.NO_NUMBERS_INPUT);
    }

    return { divider: [customDivider], numberString };
  }

  createNumberArray(numberString, divider) {
    divider.forEach((divider) => {
      numberString = numberString.split(divider).join(",");
    });

    return numberString.split(",").map(Number);
  }

  validateNumber(numberArray) {
    if (numberArray.some(isNaN)) {
      throw new Error(ERROR_MESSAGES.INVALID_INPUT);
    }

    if (numberArray.some((num) => num < 0)) {
      throw new Error(ERROR_MESSAGES.NEGATIVE_NUMBER);
    }

    return numberArray;
  }
}

export default InputParser;
