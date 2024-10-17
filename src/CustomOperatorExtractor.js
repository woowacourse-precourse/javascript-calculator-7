import { END_CUSTOM_OPERATOR, START_CUSTOM_OPERATOR } from "./constants/Constants.js";

export class CustomOperatorExtractor {
  extractCustomStartOperator(input) {
    if (input.startsWith(START_CUSTOM_OPERATOR)) {
      const endOperatorIndex = input.indexOf(END_CUSTOM_OPERATOR);
      return input.slice(START_CUSTOM_OPERATOR.length, endOperatorIndex);
    } else {
      return '';
    }
  }
}