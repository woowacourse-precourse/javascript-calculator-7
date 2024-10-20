import {
  buildNormalInputValidationRegex,
  buildCustomInputValidationRegex,
} from '../Util/regex.js';
import { ERROR_MESSAGES } from '../Constraints/Constraints.js';
import throwError from '../Error/handleError.js';

function validateCustomInputFormat(input) {
  const isInvalidFormat = !input.startsWith('//') || !input.includes('\\n');
  if (isInvalidFormat) {
    throwError(ERROR_MESSAGES.INVALID_INPUT_FORMAT);
  }
}

function validateCustomInput(inputString, escapedDelimiter) {
  if (inputString === '') return;
  const validationRegex = buildCustomInputValidationRegex(escapedDelimiter);
  if (!validationRegex.test(inputString)) {
    throwError(ERROR_MESSAGES.INVALID_CUSTOM_INPUT);
  }
}

function validateNormalInput(splitValues) {
  const validationRegex = buildNormalInputValidationRegex();
  if (splitValues.some(value => !validationRegex.test(value))) {
    throwError(ERROR_MESSAGES.INVALID_NUMBER_INPUT);
  }
}

// function validateNoDuplicateDelimiters(splitValues) {
//   if (splitValues.some(value => value === '')) {
//     throwError(ERROR_MESSAGES.DUPLICATE_DELIMITERS);
//   }
// }

export {
  validateCustomInput,
  validateNormalInput,
  // validateNoDuplicateDelimiters,
  validateCustomInputFormat,
};
