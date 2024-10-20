import { ERROR_MESSAGES, ERROR_PREFIX } from '../Constraints/Constraints.js';
import {
  buildCustomInputValidationRegex,
  buildNormalInputValidationRegex,
} from '../Util/regex.js';

export function validateCustomInputFormat(input) {
  const isInvalidFormat = !input.startsWith('//') || !input.includes('\\n');
  if (isInvalidFormat) {
    throw new Error(`${ERROR_PREFIX}${ERROR_MESSAGES.INVALID_INPUT_FORMAT}`);
  }
}

export function validateCustomInput(inputString, escapedDelimiter) {
  if (inputString === '') return;
  const validationRegex = buildCustomInputValidationRegex(escapedDelimiter);
  if (!validationRegex.test(inputString)) {
    throw new Error(`${ERROR_PREFIX}${ERROR_MESSAGES.INVALID_CUSTOM_INPUT}`);
  }
}

export function validateNormalInput(splitValues) {
  const validationRegex = buildNormalInputValidationRegex();
  if (splitValues.some(value => !validationRegex.test(value))) {
    throw new Error(`${ERROR_PREFIX}${ERROR_MESSAGES.INVALID_NUMBER_INPUT}`);
  }
}
