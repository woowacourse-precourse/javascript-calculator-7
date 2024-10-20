import handleError from '../utils/handleError.js';
import isVaildateNumber from '../utils/isVaildateNumber.js';

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

  const splitResult = input.split(delimiterRegex).filter(item => item !== '');

  return splitResult;
};

const convertNumbers = function convertNumbersFunc(splitString) {
  const numbers = splitString.map(string => parseInt(string, 10));

  return numbers;
};

const isVaildateNumbers = function isVaildateNumbersFunc(numbers) {
  numbers.forEach(num => {
    isVaildateNumber(num);
  });
};

const getNumbers = function saveNumbersFromStringFunc(input, delimiters) {
  const escapedDelimiters = createEscapedDelimiter(delimiters);
  isValidateInput(input, escapedDelimiters);

  const splitString = splitInput(input, escapedDelimiters);
  const numbers = convertNumbers(splitString);
  isVaildateNumbers(numbers);

  return numbers;
};

export default getNumbers;
