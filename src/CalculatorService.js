import Validator from './Validator.js';
import {
  sum,
  getCustomSeparator,
  getRemovedCustomSeparator,
  getSplitedBySeparator,
} from './util/inputUitl.js';

export default class CalculatorService {
  static sumUserInput(input, customSeparator) {
    const splitedUserInput = getSplitedBySeparator(input, customSeparator);
    return sum(splitedUserInput);
  }

  static validateUserInput(input) {
    Validator.validateStartsWith(input);
    const { customSeparator, processedUserInput } = this.parseUserInput(input);
    Validator.validateUsedSeparator(processedUserInput, customSeparator);
  }

  static parseUserInput(input) {
    if (input.startsWith('//')) {
      Validator.validateCustomSeparator(input);
      const customSeparator = getCustomSeparator(input);
      const processedUserInput = getRemovedCustomSeparator(input);
      return { customSeparator, processedUserInput };
    }

    return { customSeparator: null, processedUserInput: input };
  }
}
