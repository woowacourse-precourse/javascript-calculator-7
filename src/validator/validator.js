import { ERROR_MESSAGES, ERROR_PREFIX } from '../Constraints/Constraints.js';
import {
  buildCustomInputValidationRegex,
  buildNormalInputValidationRegex,
} from '../Util/regex.js';
import throwError from '../Error/handleError.js';

export function validateCustomInputFormat(input) {
  const isInvalidFormat = !input.startsWith('//') || !input.includes('\\n');
  if (isInvalidFormat) {
    throwError(`${ERROR_PREFIX}${ERROR_MESSAGES.INVALID_INPUT_FORMAT}`);
  }
}

export function validateCustomInput(inputString, escapedDelimiter) {
  if (inputString === '') return;
  const validationRegex = buildCustomInputValidationRegex(escapedDelimiter);
  if (!validationRegex.test(inputString)) {
    throwError(`${ERROR_PREFIX}${ERROR_MESSAGES.INVALID_CUSTOM_INPUT}`);
  }
}

export function validateNormalInput(splitValues) {
  const validationRegex = buildNormalInputValidationRegex();
  if (splitValues.some(value => !validationRegex.test(value))) {
    throwError(`${ERROR_PREFIX}${ERROR_MESSAGES.INVALID_NUMBER_INPUT}`);
  }
}
