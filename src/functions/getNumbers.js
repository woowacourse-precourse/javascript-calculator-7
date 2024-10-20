import handleError from '../utils/handleError.js';

const createEscapedDelimiter = function createEscapedDelimiterFunc(delimiters) {
  const escapedDelimiters = delimiters
    .map(d => d.replace(/[/.?*+|^\\\-="'"]/g, '\\$&'))
    .join('');

  return escapedDelimiters;
};

const isValidateInput = function validateInputFunc(input, escapedDelimiters) {
  const validInputRegex = new RegExp(`^[0-9${escapedDelimiters}]+$`);

  if (!validInputRegex.test(input)) {
    handleError(
      '유효하지 않은 입력: 구분자와 양수로 구성된 문자열만 입력 가능합니다.',
    );
  }
};

const splitInput = function splitInputByDelimiters(input, escapedDelimiters) {
  const delimiterRegex = new RegExp(`[${escapedDelimiters}]`);

  return input.split(delimiterRegex);
};

const getNumbers = function saveNumbersFromStringFunc(input, delimiters) {
  const escapedDelimiters = createEscapedDelimiter(delimiters);
  isValidateInput(input, escapedDelimiters);

  const splitString = splitInput(input, escapedDelimiters);
};

export default getNumbers;
