import { ERROR_MESSAGES } from '../constants.js';

class IConverter {
  convertAndValidate(values) {
    throw new Error(ERROR_MESSAGES.MUST_OVERRIDE_METHOD('convertAndValidate'));
  }
}

export default IConverter;
