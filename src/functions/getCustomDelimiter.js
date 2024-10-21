import MESSAGES from '../assets/message.js';

const isValidDelimiterFormat = function isValidDelimiterFormatFunc(input) {
  return input.startsWith('//') && input.indexOf('\\n') !== -1;
};

const extractDelimiter = function extractDelimiterFunc(input) {
  return input.slice(2, input.indexOf('\\'));
};

const validateDelimiter = function validateDelimiterFunc(delimiter) {
  const alphaSpecialCharRegex = /^[a-zA-Z/?.,;:|*~!^\-_+<>@#%&\\='"]+$/;

  if (!alphaSpecialCharRegex.test(delimiter))
    throw new Error(MESSAGES.ERROR.INVALID_DELIMITER);
};

const getCustomDelimiter = function CustomDelimiterFunc(input) {
  if (isValidDelimiterFormat(input)) {
    const customDelimiter = extractDelimiter(input);
    validateDelimiter(customDelimiter);
    return customDelimiter;
  }
  return null;
};

export default getCustomDelimiter;
