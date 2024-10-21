import { ERROR_MESSAGES } from '../constants.js';

class IOperation {
  calculate(numbers) {
    throw new Error(ERROR_MESSAGES.MUST_OVERRIDE_METHOD('calculate'));
  }
}

export default IOperation;
