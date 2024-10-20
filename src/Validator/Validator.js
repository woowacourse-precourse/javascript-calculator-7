import {
  buildNormalInputValidationRegex,
  buildCustomInputValidationRegex,
} from '../Util/regex.js';
import { ERROR_PREFIX, ERROR_MESSAGES } from '../Constraints/Constraints.js';

function validateCustomInputFormat(input) {
  const isInvalidFormat = !input.startsWith('//') || !input.includes('\\n');
  if (isInvalidFormat) {
    throw new Error(`${ERROR_PREFIX}${ERROR_MESSAGES.INVALID_INPUT_FORMAT}`);
  }
}

function validateCustomInput(inputString, escapedDelimiter) {
  if (inputString === '') return;
  const validationRegex = buildCustomInputValidationRegex(escapedDelimiter);
  if (!validationRegex.test(inputString)) {
    throw new Error(`${ERROR_PREFIX}${ERROR_MESSAGES.INVALID_CUSTOM_INPUT}`);
  }
}

function validateNormalInput(splitValues) {
  const validationRegex = buildNormalInputValidationRegex();
  if (splitValues.some(value => !validationRegex.test(value))) {
    throw new Error(`${ERROR_PREFIX}${ERROR_MESSAGES.INVALID_NUMBER_INPUT}`);
  }
}

export { validateCustomInput, validateNormalInput, validateCustomInputFormat };
