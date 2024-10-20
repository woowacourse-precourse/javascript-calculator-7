import handleError from '../utils/handleError.js';

const isValidDelimiterFormat = function isValidDelimiterFormatFunc(input) {
  return input.startsWith('//') && input.indexOf('\\n') !== -1;
};

const extractDelimiter = function extractDelimiterFunc(input) {
  return input.slice(2, input.indexOf('\\n') - 1);
};

const validateDelimiter = function validateDelimiterFunc(delimiter) {
  const alphaSpecialCharRegex = /^[a-zA-Z/?.,;:|*~!^\-_+<>@#%&\\='"]+$/;

  if (!alphaSpecialCharRegex.test(delimiter))
    handleError(
      '유효하지 않은 커스텀 구문자: 알파벳 대소문자 또는 허용된 특수 문자만 가능합니다.',
    );
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
