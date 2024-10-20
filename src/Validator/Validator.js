const {
  buildNormalInputValidationRegex,
  buildCustomInputValidationRegex,
} = require('../Util/regex.js');
const {
  ERROR_PREFIX,
  ERROR_MESSAGES,
} = require('../Constraints/Constraints.js');
// const throwError = require('../Error/handleError.js');

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

module.exports = {
  validateCustomInput,
  validateNormalInput,
  validateCustomInputFormat,
};
