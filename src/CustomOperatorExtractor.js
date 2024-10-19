import { END_CUSTOM_OPERATOR, START_CUSTOM_OPERATOR } from "./constants/Constants.js";
import { INPUT_ERROR_MESSAGE } from "./constants/Messages.js";

export class CustomOperatorExtractor {
  extractCustomStartOperator(input) {
    if (input.startsWith(START_CUSTOM_OPERATOR)) {
      const endOperatorIndex = input.indexOf(END_CUSTOM_OPERATOR);
      this.#isExistEndOperator(endOperatorIndex);
      const customOperator = input.slice(START_CUSTOM_OPERATOR.length, endOperatorIndex);
      this.#isExistCustomOperator(customOperator);
      return customOperator;
    } else {
      return '';
    }
  }

  #isExistEndOperator(endOperatorIndex) {
    if (endOperatorIndex === -1) {
      throw Error(INPUT_ERROR_MESSAGE);
    }
  }

  #isExistCustomOperator(customOperator) {
    if (customOperator === '') {
      throw Error(INPUT_ERROR_MESSAGE);
    }
  }
}