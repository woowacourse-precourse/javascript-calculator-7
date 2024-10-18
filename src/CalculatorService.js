import Validator from './Validator.js';
import UserInputHandler from './userInputHandler.js';

export default class CalculatorService {
  static sumUserInput(input, customSeparator) {
    const splitedUserInput = UserInputHandler.getSplitedBySeparator(
      input,
      customSeparator,
    );
    return UserInputHandler.sum(splitedUserInput);
  }

  static validateUserInput(input) {
    Validator.validateStartsWith(input);
    const { customSeparator, processedUserInput } = this.parseUserInput(input);
    Validator.validateUsedSeparator(processedUserInput, customSeparator);
  }

  static parseUserInput(input) {
    let customSeparator = null;
    let processedUserInput = null;

    if (Validator.checkStartWidthDubbleSlash(input)) {
      Validator.validateCustomSeparator(input);
      customSeparator = UserInputHandler.getCustomSeparator(input);
      processedUserInput = UserInputHandler.getRemovedCustomSeparator(input);
    }

    return { customSeparator, processedUserInput: processedUserInput || input };
  }
}
