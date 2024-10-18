import Validator from './Validator.js';
import UserInputHandler from './userInputHandler.js';
import {
  getCustomSeparator,
  getRemovedCustomSeparator,
  getSplitedBySeparator,
} from './userInputHandler.js';

export default class CalculatorService {
  static sumUserInput(input, customSeparator) {
    const splitedUserInput = getSplitedBySeparator(input, customSeparator);
    return UserInputHandler.sum(splitedUserInput);
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

    return { customSeparator: null, processedUesrInput: input };
  }
}
